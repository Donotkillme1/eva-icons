const path = require('path');

const config = {
  'convertOrResizeFormats': [
    {
      'format': 'png',
      'size': ['64']
    }
  ],
  'copy': [
    {
      'format': 'svg'
    },
  ],
  'srcPath': path.join(__dirname, `../package/icons`),
  'desPath': path.join(__dirname, `../package-build`),
  'defaultExtension': 'svg'
};

module.exports = config;