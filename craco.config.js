const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, 'src')
    },
    configure: {
      resolve: {
        extensions: ['.js', '.vue', '.json', '.scss', '.css']
      }
    }
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/assets/styles/_config.scss";
          @import "@/assets/styles/_mixins.scss";
        `
      }
    }
  }
}