// eslint-disable no-undef
const gatsby = jest.requireActual('gatsby');
module.exports = { ...gatsby, graphql: jest.fn(), Link: 'Link' };
