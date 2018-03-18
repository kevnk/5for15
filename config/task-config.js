module.exports = {
  html: true,
  images: true,
  fonts: true,
  static: true,
  svgSprite: true,
  ghPages: true,
  stylesheets: true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ['./app.js'],
    },
    production: {
      publicPath: '/5for15',
    },
  },
  browserSync: {
    notify: false,
    proxy: 'http://5for15.local',
  },

  production: {
    rev: true,
  },
};
