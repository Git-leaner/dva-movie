const path = require('path');
// import webpack from 'webpack';
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg，
  // 业务代码本地私有 svg 存放目录path.resolve(__dirname, 'src/my-project-svg-foler'),
  path.resolve(__dirname, 'src/my-project-svg-foler')
];
const pxtorem = require('postcss-pxtorem');
export default {
  entry : "src/index.js" ,
  disableCSSModules : false ,
  publicPath : "/" ,
  theme : "" ,
  svgSpriteLoaderDirs : svgSpriteDirs ,
  autoprefixer : {
    browsers : [
      "iOS >= 8" ,
      "Android >= 4"
    ]
  } ,
  proxy : { } ,
  extraPostCSSPlugins : [
    pxtorem( {
      rootValue : 100 ,
      propWhiteList : [] ,
    } ) ,
  ] ,
  extraBabelPlugins : [
    "transform-runtime" ,
    [
      "import" ,
      { libraryName : "antd-mobile" , "libraryDirectory" : "es" , "style" : true }
    ]
  ] ,
  env : {
    development : {
      extraBabelPlugins : [
        "dva-hmr"
      ]
    }
  }
};