import pxtorem from 'postcss-pxtorem';
export default {
  "entry": "src/index.js",
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  "env": {
    "development": {
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
      "extraBabelPlugins": [
        "transform-runtime",
        ["import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }]
      ]
    },
    "production": {
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
      "extraBabelPlugins": [
        "transform-runtime",
        ["import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }]
      ]
    }
  }
};
