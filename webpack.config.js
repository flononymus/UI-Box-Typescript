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
  entry: {
    main: './src/main.ts',
    preload:'./src/preload.ts',
    renderer:'./src/renderer.tsx'
  },
  target: 'electron-main',
  mode:'development',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ]
  },
  resolve: {
        extensions: ['.ts', '.js','.tsx','.jsx']
  },
  output: {
    // filename: 'bundle.js', // Single output file
    filename:'[name].js',
    path: path.resolve(__dirname, 'src/dist')
  },
};
