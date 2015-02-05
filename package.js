
Package.describe({
  summary: "Allows you to copy template",
  version: "0.9.0",
  name: "mrt:copy-template",
  git: "https://github.com/apendua/meteor-copy-template.git",
});

Package.onUse(function (api) {
  if (api.versionsFrom) {
    api.versionsFrom([ "METEOR@1.0" ]);
  }
  api.use('templating', 'client');
  api.addFiles('copy_template.js', 'client');
});
