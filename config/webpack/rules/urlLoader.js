module.exports = {
  exclude: [
    /\.html$/,
    /\.jsx?$/,
    /\.scss$/,
    /\.css$/,
  ],
  loader: 'url-loader',
  options: {
    limit: 50000,
    name: 'data/[name].[ext]',
  },
};
