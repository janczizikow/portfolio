/* eslint-disable
    import/newline-after-import,
    iterators/generators,
    no-console,
    no-param-reassign,
    no-restricted-syntax,
    no-await-in-loop
*/
// require('dotenv').config({ path: '.env' });
const path = require('path');
const crypto = require('crypto');
const axios = require('axios');
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.sourceNodes = ({ actions: { createNode }, createNodeId }) => {
  const baseApiUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://janczizikow-portfolio-api.herokuapp.com/api/v2/projects/'
      : 'http://localhost:3000/api/v2/projects/';

  const processProject = project => {
    const nodeId = createNodeId(`project-${project.name}-${project.id}`);
    const nodeContent = JSON.stringify(project);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    // create project nodes
    const nodeData = Object.assign({}, project, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Project`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });
    return nodeData;
  };

  return axios
    .get(baseApiUrl)
    .then(res => {
      res.data.forEach(project => {
        const nodeData = processProject(project);
        createNode(nodeData);
      });
    })
    .catch(error => {
      console.warn(error);
    });
};

exports.onCreateNode = async ({
  node,
  store,
  cache,
  actions: { createNode, createParentChildLink },
  createNodeId,
}) => {
  if (node.internal && node.internal.type === 'Project') {
    let thumbnailNode;
    try {
      thumbnailNode = await createRemoteFileNode({
        url: node.thumbnail.url,
        store,
        cache,
        createNode,
        createNodeId: () => `project-${node.name}-thumbnail`,
      });
    } catch (e) {
      // Ignore
      console.warn(e);
    }

    if (thumbnailNode) {
      delete node.thumbnail;
      node.thumbnail___NODE = thumbnailNode.id;
    }

    for (const photo of node.photos) {
      let fileNode;

      try {
        fileNode = await createRemoteFileNode({
          url: photo.photo.url,
          store,
          cache,
          createNode,
          createNodeId,
        });

        if (fileNode) {
          createParentChildLink({ parent: node, child: fileNode });
        }
      } catch (error) {
        console.warn('error creating node', error);
      }
    }
  }
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions: { createPage } }) =>
  new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);
    // Query for project nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allProject {
            edges {
              node {
                id
                name
                slug
                description
                links {
                  text
                  url
                }
                next {
                  name
                  slug
                }
                prev {
                  name
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each project
        result.data.allProject.edges.forEach(({ node }) => {
          createPage({
            path: `/projects/${node.slug}/`,
            component: projectTemplate,
            context: {
              id: node.id,
              name: node.name,
              description: node.description,
              links: node.links,
              next: node.next,
              prev: node.prev,
            },
          });
        });
      })
    );
  });
