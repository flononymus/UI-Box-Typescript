// const path = require('path');

// module.exports = {
//   entry: {
//     main:'./src/main.ts',
//     preload: "/src/preload.ts",
//     renderer: "/src/renderer.ts",
//   },
//   target: 'electron-main',
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: 'ts-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.ts', '.js','.tsx','.jsx']
//   },
//   output: {
//     path: path.resolve(__dirname, 'src/dist'),
//     filename: '[name].js'
//   }
// };


const path = require('path');

module.exports = {
  entry: [
    './src/main.ts',
    './src/preload.ts',
    './src/renderer.ts'
  ],
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
        extensions: ['.ts', '.js','.tsx','.jsx']
  },
  output: {
    filename: 'bundle.js', // Single output file
    path: path.resolve(__dirname, 'src/dist')
  }
};
