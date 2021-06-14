const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
	app.use(
		["/api"],
		createProxyMiddleware({
			target: "https://stag.goal123.com",
			changeOrigin: true
		})
	);
};
