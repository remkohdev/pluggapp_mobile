exports.config = {
  seleniumAddress: 'http://localhost:4723',
  specs: [
    './*_spec.js'
  ],
  capabilities: {
    platformName: 'android',
    platformVersion: '5.0',
    deviceName: 'lg g3',
    browserName: '',
    autoWebview: true,
    app: '/absolutepathtoapk'
  },
  baseUrl: 'http://127.0.0.1:4001',
  onPrepare: function(){
    var wd = require('wd'),
    protractor = require('protractor'),
    wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor('exports.config');
  }
}
