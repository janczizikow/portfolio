require('dotenv').config({ path: '.env' });
const path = require('path');
const crypto = require('crypto');
const fetch = require('node-fetch');
const queryString = require('query-string');
const axios = require('axios');

exports.sourceNodes = ({ actions, createNodeId }, configOptions) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  const baseApiUrl = 'http://localhost:3000/api/v1/projects';

  const processProject = project => {
    const nodeId = createNodeId(`project-${project.name}-${project.id}`);
    const nodeContent = JSON.stringify(project);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

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
  return axios.get(baseApiUrl).then(res => {
    res.data.forEach(project => {
      const nodeData = processProject(project);
      createNode(nodeData);
    });
  });
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allProject {
            edges {
              node {
                name
                date
                slug
                category
                description
                links {
                  text
                  url
                }
                thumbnail {
                  big {
                    url
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allProject.edges.forEach(({ node }) => {
          const path = `/projects/${node.slug}`;
          createPage({
            path,
            component: projectTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              name: node.name,
              date: node.date,
              category: node.category,
              description: node.description,
              links: node.links,
            },
          });
        });
      })
    );
  });
};
