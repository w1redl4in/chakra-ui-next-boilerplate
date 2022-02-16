/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");
const withPWA = require("next-pwa");

const nextConfig = withPlugins([
  [
    withPWA,
    {
      reactStrictMode: true,
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
      },
    },
  ],
  [nextTranslate],
]);
module.exports = nextConfig;
