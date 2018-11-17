const Promise = require('bluebird');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions: { createPage } }) =>
  new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/project.js`);

    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const projects = result.data.allContentfulProject.edges;

      // Create pages for each project
      projects.forEach(({ node }, i) => {
        const prev = i === 0 ? null : projects[i - 1].node;
        const next = i === projects.length - 1 ? null : projects[i + 1].node;

        createPage({
          path: `/projects/${node.slug}`,
          component: slash(projectTemplate),
          context: {
            id: node.id,
            next,
            prev,
          },
        });
      });
    });

    resolve();
  });
