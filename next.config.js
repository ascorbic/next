const path = require("path");

module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "ru"],
    trailingSlash: false,
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false,
  },
};
