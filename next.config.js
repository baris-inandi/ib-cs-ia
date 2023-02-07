const USE_PWA = false;

const nextConfig = {
	// next.js config
};

const withPWA = require("next-pwa")({
	dest: "public",
});

if (USE_PWA) {
	module.exports = withPWA(nextConfig);
}
module.exports = nextConfig;
