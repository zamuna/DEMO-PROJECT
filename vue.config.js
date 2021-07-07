module.exports = {
  devServer: {
    proxy: 'https://www.westelm.com/',
    headers: { "Access-Control-Allow-Origin": "*" }
  },
}

