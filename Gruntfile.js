module.exports = function(grunt) {
 
       // start of karma integeration
    grunt.initConfig({
    
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                AutoWatch: true
          
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('karmastart', ['karma']);

    // start of AT Packager

    grunt.loadNpmTasks('ariatemplates');
    grunt.config.set('easypackage.one', {
        options : {
            sourceDirectories : [__dirname +'/debug'],
            minify : false,
            clean : false,
            outputDirectory : __dirname +'/target',
            packages : require(__dirname + '/build/config/myApp-packages.json'),
        }
    });
    grunt.registerTask('build', ['easypackage:one']);

    grunt.registerTask('default',['easypackage:one','karmastart']);

};