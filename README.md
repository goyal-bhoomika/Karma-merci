
# Karma Set up


1.	Install nodejs - Download the 64bit installer and follow the default installation path. Installation is usually uneventful.

2.	If you get the error “"Error: ENOENT, stat C:\Users\<username>\AppData\Roaming\npm" , manually create the folder called “npm” at the end of the path.

3.Open cmd and reach the directory domains\<domain name>\web\plnext\default\dev-version_merci\static\merciAT   
     Choose the domain in which you want to work.
     Run the following command.
     git clone https://github.com/goyal-bhoomika/Karma-merci.git

4. Go to the path domains\<domain name>\web\plnext\default\dev-version_merci\static\merciAT  
  
5.You will notice follwing new files:
  Folders: .git, aria,buildm,coverage,karma-example,node_modules,test
  Files: .gitattributes,.gitignore, Gruntfile.js, karma.conf.js, npm-debug.log, package.json, README.cmd, test-main.js

6.Open karma.conf.js :
  Search for Under the files: [ , you will find the following lines.
  'debug/modules/view/merci/common/utils/MerciGA.js',
  'debug/modules/view/merci/segments/servicing/subModules/checkin/ssci/templates/pages/CheckInNewScript.js',

  You should replace these with the path of the files whose test cases you will be working on.(Make sure the path start from debug).

7.  Open cmd. Change dir to karma-example and run `npm update`
It will install the needed dependencies , it should complete with out any errors.

8.Open test folder. You will find some test files there.
Make a new file for the page you will be working on and save there.

9.	Run the command `karma start` , the configured browser (chrome) should open and you should see the results in the command line interface (CLI). For the debug mode, run as `karma start --debug`

10.   With grunt integeration, you can run as `grunt`.

11.If you are totally new to Karma, go through karma-example folder in order to understand it better.


##                      TO DO Items

1. Integrate / create a preprocessor for ATPackager
2. Change the test file from suffix to prefix, for instance, `TestVechile.js` instead `VechileTest.js`
3. Integrate Karma with mvn build
4. Integrate Karma with sonarqube
5. Create git prehook to avoid code check in with `console.log` and `it.only` and `describe.only`
6. Go through the link http://sinonjs.org/docs/ to understand more about Sinon and explore different features.

##                      Known Issues
1. AT pre processor is converting tpl in to js, but the file prefix is not changed.
2. AT pre processor works only with 1.6.4 version of aria.
3. AT pre processor has a sleep of 5 secs to overcome the execution during compilation.


 
