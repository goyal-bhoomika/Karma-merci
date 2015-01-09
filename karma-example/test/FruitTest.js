    var assert = chai.assert;
    var should = chai.should();// node.js core module
    var expect = chai.expect;


    describe('aria_test_suite', function(){

    describe('AriaTest', function() {

    function _setupData(nameJSON) {
       
     //call the function 
        Aria.load({
                classes: ["classes.Fruit"],
               // oncomplete: startProcess,
                onerror : errorOnStart
            });  


             function errorOnStart() {
               console.log("Error loading js object");
            }  	    
    }

     

    it('is_it_called_once', function (){
      //set up data
      _setupData({});
        
      var aFruit;       
      aFruit  = new classes.Fruit();
      aFruit.setColor("white");
      assert.equal(aFruit.getColor(),"white");
      aFruit.$dispose();  
      aFruit=null;
          

      
     })

    })

    })