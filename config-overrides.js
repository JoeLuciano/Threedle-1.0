const { override } = require('customize-cra');

const ignoreWarnings = (value) => (config) => {
  config.ignoreWarnings = value;
  return config;
};

module.exports = override(ignoreWarnings([/Failed to parse source map/]));

// VVVVVVVVV DOESN'T WORK AS EXPECTED VVVVVVVVVVVVV

// const removeThreeJsDependencyMapError = () => (config) => {
//   config.module.rules.push({
//     test: /\.js$/,
//     enforce: 'pre',
//     use: [
//       {
//         //needed to chain sourcemaps.  see: https://webpack.js.org/loaders/source-map-loader/
//         loader: 'source-map-loader',
//         options: {
//           filterSourceMappingUrl: (url, resourcePath) => {
//             //  console.log({ url, resourcePath }) example:
//             // {
//             //  url: 'index.js.map',
//             //  resourcePath: '/repos/xlib-wsl/common/temp/node_modules/.pnpm/https-proxy-agent@5.0.0/node_modules/https-proxy-agent/dist/index.js'
//             // }

//             if (/.*\/node_modules\/.*/.test(resourcePath)) {
//               return false;
//             }
//             return true;
//           },
//         },
//       },
//     ],
//   });
//   return config;
// };

// module.exports = override(removeThreeJsDependencyMapError());
