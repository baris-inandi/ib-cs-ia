let nextConfig = {
    // next.js config
    async redirects() {
        return [
            {
                source: "/app",
                destination: "/app/dashboard",
                permanent: false,
            },
        ];
    },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE_BUNDLE === "true",
});

const withPWA = require("next-pwa")({
    dest: "public",
});

if (process.env.USE_PWA !== "false") {
    console.log(
        "process.env.USE_PWA is not explicitly disabled, using PWA features.",
    );
    nextConfig = withPWA(nextConfig);
}

nextConfig = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;

