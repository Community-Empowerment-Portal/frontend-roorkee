module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
      },
    ];
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  
};
