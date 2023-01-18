const nextConfig = {
	// next.js config
};

const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA(nextConfig);
