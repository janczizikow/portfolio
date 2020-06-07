const path = require('path');

function getPreviousNode(nodes, index) {
  if (index === 0) {
    return null;
  }

  return nodes[index - 1];
}

function getNextNode(nodes, index) {
  if (nodes.length - 1 <= index) {
    return null;
  }

  return nodes[index + 1];
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions: { createPage } }) =>
  new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);
    // Query for project nodes to use in creating pages.
    resolve(
      graphql(`
        {
          allStrapiProject(sort: { fields: date, order: DESC }, limit: 1000) {
            nodes {
              id
              name
              slug
            }
          }
        }
      `).then(results => {
        if (results.errors) {
          reject(results.errors);
        }

        const { nodes } = results.data.allStrapiProject;

        // Create pages for each project
        nodes.forEach((node, i) => {
          createPage({
            path: `/projects/${node.slug}/`,
            component: projectTemplate,
            context: {
              id: node.id,
              next: getNextNode(nodes, i),
              prev: getPreviousNode(nodes, i),
            },
          });
        });
      })
    );
  });
