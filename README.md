[![Build Status](https://travis-ci.org/g00glen00b/gatsby-wordpress-reading-time.svg?branch=master)](https://travis-ci.org/g00glen00b/gatsby-wordpress-reading-time) [![Vulnerabilities](https://snyk.io/test/github/g00glen00b/gatsby-wordpress-reading-time/badge.svg)](https://snyk.io/test/github/g00glen00b/gatsby-wordpress-reading-time) [![codecov](https://codecov.io/gh/g00glen00b/gatsby-wordpress-reading-time/branch/master/graph/badge.svg)](https://codecov.io/gh/g00glen00b/gatsby-wordpress-reading-time) ![Dependencies](https://david-dm.org/g00glen00b/gatsby-wordpress-reading-time.svg) [![npm version](https://badge.fury.io/js/gatsby-wordpress-reading-time.svg)](https://badge.fury.io/js/gatsby-wordpress-reading-time)  


# gatsby-wordpress-reading-time
Gatsby WordPress plugin for adding a reading time estimation, like Medium does.
This library uses [`reading-time`](https://github.com/ngryman/reading-time) behind the screens.

## Install
This plugin can be installed by using:

```
npm install --save gatsby-wordpress-reading-time
```

## How to use
This plugin should be applied on `gatsby-source-wordpress`. For example:

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Other options ...
        plugins: [
          `gatsby-wordpress-reading-time`,
        ]
      }
    },
  ]
};
```

## How to query
When configured, this plugin will add a `readingTime` field for every WordPress entity that contains a `content` field.
This means that posts, pages and custom post types should all be supported.

The following query can be used to obtain the reading time estimation for all WordPress posts:

```graphql
{
  allWordpressPost {
    edges {
      node {
        fields {
          readingTime {
            text
            minutes
            time
            words
          }
        }
      }
    }
  }
}
```

The structure of the `readingTime` field is the same as the structure provided by the [`reading-time`](https://github.com/ngryman/reading-time) library.

## Examples
The following repository contains an example of a Gatsby blog using the `gatsby-wordpress-reading-time` plugin:

- [Repository](https://github.com/g00glen00b/gatsby-blog)
- [Demo](https://dimitr.im/)

## License
MIT
