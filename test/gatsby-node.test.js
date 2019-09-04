jest.doMock('reading-time', () => content => ({
  text: '5 min read',
  content: content
}));

require('reading-time');
const {onCreateNode} = require('../src/gatsby-node');

beforeEach(() => {
  jest.resetModules();
});

test('adds readingTime field for nodes with content', () => {
  const node = {content: 'foo'};
  const createNodeField = jest.fn();
  const actions = {createNodeField};

  onCreateNode({node, actions});

  expect(createNodeField.mock.calls.length).toBe(1);
  expect(createNodeField.mock.calls[0][0].node).toBe(node);
  expect(createNodeField.mock.calls[0][0].name).toBe('readingTime');
  expect(createNodeField.mock.calls[0][0].value.text).toBe('5 min read');
  expect(createNodeField.mock.calls[0][0].value.content).toBe('foo');
});

test('does not add readingTime field if there is no content', () => {
  const node = {};
  const createNodeField = jest.fn();
  const actions = {createNodeField};

  onCreateNode({node, actions});

  expect(createNodeField.mock.calls.length).toBe(0);
});
