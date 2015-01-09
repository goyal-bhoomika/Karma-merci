// Karma configuration
// Generated on Mon Dec 01 2014 18:32:34 GMT+0530 (India Standard Time)
var sourcePreprocessors = 'coverage';
function isDebug(argument) {
    return argument === '--debug';
}
if (process.argv.some(isDebug)) {
    sourcePreprocessors = [];
    console.log("Debugging is enabled");
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [    
    'mocha',     
    'requirejs',
    'chai',
    'sinon'
    //'karma-js-coverage'
    ],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      'node_modules/karma-jquery/jquery/jquery-2.1.0.js',

      {pattern:'aria/ariatemplates-1.6.4.js',watched: false},
      'debug/modules/view/merci/common/utils/MerciGA.js',
      'debug/modules/view/merci/segments/servicing/subModules/checkin/ssci/templates/pages/CheckInNewScript.js',

      // Very important the templates just need to be watched MUST NOT be served
     // {pattern: 'static/**/*.tpl', watched: true, included: false, served: false}, 
      'target/**/*.tpl',
      {pattern: 'someresource/**/*.*', watched: false, included: false, served: true},
      {pattern: 'test/**/*.js', included: false}
       
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
     // 'test/!(test*).js': ['coverage']
     //'src/**/*.js': ['coverage']
     'debug/**/*.tpl': ['ariatemplate'],
     'debug/**/*.js': sourcePreprocessors
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

   // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

    
  });
};
