const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove ModuleScopePlugin to allow react-refresh runtime resolution in dev
      webpackConfig.resolve.plugins = (webpackConfig.resolve.plugins || []).filter(
        (plugin) => plugin && plugin.constructor && plugin.constructor.name !== 'ModuleScopePlugin'
      );
      return webpackConfig;
    },
  },
};
