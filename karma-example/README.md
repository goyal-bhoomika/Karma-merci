
#                     Karma Set up


1.	Install nodejs - Download the 64bit installer and follow the default installation path. Installation is usually uneventful.

2.	If you get the error “"Error: ENOENT, stat C:\Users\<username>\AppData\Roaming\npm" , manually create the folder called “npm” at the end of the path.

3.	Fork or Clone the project from gitstash
Create a new directory and change to that directory

	3a. If you are planning to contribute, run the below command
    
    ```
       git clone http://<username>@rndwww.nce.amadeus.net/git/scm/~<username>/karma-example.git
    ```
	
	3b. If you are just want to see it working, run the below command
        
    ```
        git clone http://<username>@rndwww.nce.amadeus.net/git/scm/merci/karma-example.git 
    ```
 

4.  Change dir to karma-example and run `npm update`
It will install the needed dependencies , it should complete with out any errors
 
5.	Run the command `karma start` , the configured browser (chrome) should open and you should see the results in the command line interface (CLI). For the debug mode, run as `karma start --debug`

6.   With grunt integeration, you can run as `grunt` 


##                      TO DO Items

1. Integrate / create a preprocessor for ATPackager
2. Change the test file from suffix to prefix, for instance, `TestVechile.js` instead `VechileTest.js`
3. Integrate Karma with mvn build
4. Integrate Karma with sonarqube
5. Create git prehook to avoid code check in with `console.log` and `it.only` and `describe.only`

##                      Known Issues
1. AT pre processor is converting tpl in to js, but the file prefix is not changed.
2. AT pre processor works only with 1.6.4 version of aria.
3. AT pre processor has a sleep of 5 secs to overcome the execution during compilation.


 
