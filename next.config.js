const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/.well-known/:file",
        destination: "/api/.well-known/:file",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
