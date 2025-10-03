const path = require('path');

exports.PROJECT_DIR = path.resolve(__dirname, '..');

exports.SOURCE_DIR = path.join(exports.PROJECT_DIR, 'src');

exports.CONFIG_DIR = path.join(exports.PROJECT_DIR, 'config');

exports.BUILD_DIR = path.join(exports.PROJECT_DIR, 'build');
