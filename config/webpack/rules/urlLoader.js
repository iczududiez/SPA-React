module.exports = {
  exclude: [
    /\.html$/,
    /\.jsx?$/,
    /\.scss$/,
    /\.css$/,
  ],
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'data/[name].[ext]',
  },
};
