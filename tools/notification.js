const notifier = require('node-notifier');
class NotificationPlugin {
  apply(compiler) {
    // `run` hook: fired when the build starts
    compiler.hooks.done.tap('MyCustomPlugin', compiler => {
      // console.log('Build started...');
      notifier.notify(
        {
          title: 'Compilation Done',
          message: 'Webpack has finished compiling',
          sound: false,
          wait: true,
        },
        function (err, response, metadata) {},
      );
    });
  }
}

module.exports = NotificationPlugin;
