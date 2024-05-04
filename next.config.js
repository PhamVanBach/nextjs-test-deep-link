const nextConfig = {
  async redirects() {
    return [
      {
        reactStrictMode: true,
        webpack5: true,
        source: "/.well-known/:file",
        destination: "/api/.well-known/:file",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
