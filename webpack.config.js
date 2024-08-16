const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  entry: {
    main: './src/main.ts',
    preload:'./src/preload.ts',
    renderer:'./src/renderer.tsx'
  },
  target: 'electron-main',
  // mode:'development',
  mode:'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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

const rendererConfig = {
  mode: 'development',
  entry: './src/renderer.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
    publicPath: '/', // Important for hot reloading
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from dist
    },
    hot: true, // Enable hot reloading
    historyApiFallback: true, // For single-page apps
    port: 3000, // You can change this to any port you prefer
  },
  // Add other configurations as needed
};
