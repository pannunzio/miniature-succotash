module.exports = {
	images: {
		domains: ['placekitten.com'],
		webpack: (cfg) => {
			cfg.module.rules.push(
				{
					test: /\.md$/,
					loader: 'frontmatter-markdown-loader',
					options: { mode: ['react-component'] }
				}
			)
			return cfg;
		}
	}
};