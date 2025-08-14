/*
 * CRACO config to patch CRA's webpack: remove ModuleScopePlugin to avoid
 * "react-refresh/runtime.js falls outside of src" errors in certain setups
 * (e.g., sync folders or absolute path resolutions). This keeps HMR working
 * without disabling Fast Refresh globally.
 */
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			// Remove ModuleScopePlugin from resolve.plugins
			if (webpackConfig.resolve && Array.isArray(webpackConfig.resolve.plugins)) {
				webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
					(plugin) => plugin && plugin.constructor && plugin.constructor.name !== 'ModuleScopePlugin'
				);
			}

			return webpackConfig;
		},
	},
};
