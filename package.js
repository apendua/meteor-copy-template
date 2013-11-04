
Package.describe({
  summary: "Allows you to copy template",
});

Package.on_use(function (api) {
  api.use('templating', 'client');
  api.add_files('copy_template.js', 'client');
});
