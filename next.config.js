const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  trailingSlash: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "ru"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false,
  },
};
