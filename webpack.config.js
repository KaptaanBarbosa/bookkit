var path = require('path');

const weback =  require('webpack');

module.exports = {
  entry:'./src/app.js',
  output:{
      filename:'bundle.js',
      path:path.resolve(__dirname,'public')
  },
  watch:true,
  module:{
    rules:[
          {
              test:/\.js$/,
              exclude:/node_modules/,
              loader:'babel-loader',
              query:{
                    presets:["@babel/preset-env", "@babel/preset-react"],
                    plugins: ['@babel/proposal-class-properties',    "@babel/transform-react-constant-elements",
                    "@babel/transform-react-inline-elements",
                    "transform-react-remove-prop-types",
                    "transform-react-pure-class-to-function",
                
                    "@babel/transform-runtime",
                    ["babel-plugin-root-import", {
                      "rootPathSuffix": "."
                    }]
                ]
              }
          }
      ]
  }

}