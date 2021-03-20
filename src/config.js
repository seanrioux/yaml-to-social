const config = {
	appUrl: "http://localhost:3001",
	apiUrl: "http://localhost:3000",
	buildFolder: "../renders",
	sizes: [
		{
			name: "Instagram feed",
			width: 1080,
			height: 1080,
		},
		{
			name: "Instagram feed portrait",
			width: 1080,
			height: 1350,
		},
		{
			name: "Instagram story",
			width: 1080,
			height: 1920,
		},
	],
};

exports.config = config;
