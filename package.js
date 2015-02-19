Package.describe({
  summary: 'GraphicsMagick for Meteor',
  version: '1.0.0',
  name: 'jagi:graphics-magick',
  git: 'https://github.com/jagi/meteor-graphics-magick.git'
});

Npm.depends({
  'gm': '1.17.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles('lib/server/graphics-magick.js', 'server');

  api.export(['gm'], 'server');
});
