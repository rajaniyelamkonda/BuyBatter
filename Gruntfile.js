module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     
cordovacli: {
    options: {
        path: 'myHybridAppFolder',
        cli: 'cordova'
    },
    cordova: {
        options: {
            command: ['create','platform','build'],
            platforms: ['android'],
            path: 'myHybridAppFolder',
            id: 'io.cordova.hellocordova',
            name: 'HelloCordova'
        }
    },
    create: {
        options: {
            command: 'create',
            id: 'com.myHybridApp',
            name: 'myHybridApp'
        }
    },
    add_platforms: {
        options: {
            command: 'platform',
            action: 'add',
            platforms: ['ios', 'android']
        }
    },
    build_android: {
        options: {
            command: 'build',
            platforms: ['android']
        }
    }
}
  
  });
  grunt.loadNpmTasks('grunt-cordovacli');
};