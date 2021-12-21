/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/scss')],
  },
}
