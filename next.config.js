// @ts-check
const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // output: 'export',
  webpack: (config) => {
    // append the CopyPlugin to copy the file to your public dir
    config.plugins.push(
        new CopyPlugin({
          patterns: [
            { from: "node_modules/journal/dist", to: "public/" },
          ],
        }),
    )

    // Important: return the modified config
    return config
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/frankl',
  //       destination: '/frankl.html',
  //     },
  //   ]
  // },
}

module.exports = nextConfig