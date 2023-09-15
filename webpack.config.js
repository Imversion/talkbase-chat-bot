const path = require('path');

module.exports = {
  entry: './src/components/bot/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bot.js',
    library: 'talkbase-chat-bot',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
