/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dy6xelvys/image/upload',
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {and: [/\.(js|ts)x?$/]},
      use: ['@svgr/webpack'],
    })

    return config
  },
}
