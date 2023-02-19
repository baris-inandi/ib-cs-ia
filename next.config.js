let nextConfig = {
  // next.js config
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true",
});

const withPWA = require("next-pwa")({
  dest: "public",
});

if (process.env.USE_PWA === "true") {
  nextConfig = withPWA(nextConfig);
}

nextConfig = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
