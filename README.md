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
