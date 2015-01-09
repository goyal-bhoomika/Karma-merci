    var assert = chai.assert;
    var should = chai.should();// node.js core module
    var expect = chai.expect;


  describe('Vechile_test_suite', function(){

    describe('VechileTest_Probing', function() {

      function _setupData(nameJSON) {
         
        Aria.load({
                classes: ["classes.Vehicle"],
                onerror : errorOnStart
            });  

             function errorOnStart() {
               console.log("Error loading js object");
            }  	    
      }

      before(function() {
        // runs before all tests in this block
          _setupData({});
      })
      after(function(){
        // runs after all tests in this block
         
      })
      beforeEach(function(){
        // runs before each test in this block
        sinon.spy(aria.core.IO, 'asyncRequest');
      })
      afterEach(function(){
        // runs after each test in this block
        aria.core.IO.asyncRequest.restore();
      })

      

      it('checkColor', function (){       
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.setColor("black");
        assert.equal(aVehicle.getColor(),"black");
        aVehicle.$dispose();  
        aVehicle=null;
       }),
      it('getFuelLevel is calledOnce', function (){       
        var aVehicle;       
        aVehicle  = new classes.Vehicle("http://localhost:9876/someresouce/getFuelLevel");
        aVehicle.getFuelLevel();
        assert(aria.core.IO.asyncRequest.calledOnce);
        aVehicle.$dispose();  
        aVehicle=null;       
       }),
      it('getFuelLevel is called with', function (){       
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.getFuelLevel("http://localhost:9876/someresouce/getFuelLevel");
        assert.equal("http://localhost:9876/someresouce/getFuelLevel", aria.core.IO.asyncRequest.getCall(0).args[0].url);
        aVehicle.$dispose();  
        aVehicle=null;       
       }),
       it('getFuelLevel is called with engineId', function (){
       
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.getFuelLevel("http://localhost:9876/someresouce/getFuelLevel/engine/123");
        assert.equal("http://localhost:9876/someresouce/getFuelLevel/engine/123", aria.core.IO.asyncRequest.getCall(0).args[0].url);
        assert.ok(aria.core.IO.asyncRequest.calledWithMatch({ url: "http://localhost:9876/someresouce/getFuelLevel/engine/123" }),"Callled with");
        aVehicle.$dispose();  
        aVehicle=null;       
       })

    }),


     describe('Engine_is_Called', function() {

      function _setupData(nameJSON) {
         
        Aria.load({
                classes: ["classes.Vehicle"],
                onerror : errorOnStart
            });  

             function errorOnStart() {
               console.log("Error loading js object");
            }       
      }

      before(function() {
        // runs before all tests in this block
          _setupData({});
      })
      after(function(){
        // runs after all tests in this block
         
      })
      beforeEach(function(){
        // runs before each test in this block
        sinon.spy($, 'ajax');
       
      })
      afterEach(function(){
        // runs after each test in this block
       $.ajax.restore();
      })

      

      it('startEngine is called ', function (done){               
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.engine.startEngine("engine/start/123");
        expect($.ajax.calledOnce).to.be.true; // see if the spy called
        var call = $.ajax.getCall(0);
 
        console.log( call.args);

        console.log(call.exception);
        console.log(call.returnValue);
        done(); // let Mocha know we're done async testing
        aVehicle.$dispose();  
        aVehicle=null;
       })

    }),


    describe('Engine_Returns', function() {

      function _setupData(nameJSON) {
         
        Aria.load({
                classes: ["classes.Vehicle"],
                onerror : errorOnStart
            });  

             function errorOnStart() {
               console.log("Error loading js object");
            }       
      }

      before(function() {
        // runs before all tests in this block
          _setupData({});
      })
      after(function(){
        // runs after all tests in this block
         
      })
      beforeEach(function(){
        // runs before each test in this block
       
       
      })
      afterEach(function(){
        // runs after each test in this block
       $.ajax.restore();
      })

      

      it('When engine started successfully then state=="OK" ', function (done){ 
       sinon.stub($, 'ajax').yieldsTo('success', {
              started: true,
              message: 'Engine condition'});             
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.engine.startEngine("engine/start/123");
        //expect($.ajax.calledOnce).to.be.true; // see if the spy called
        assert.equal(aVehicle.engine.state,"OK");
        done(); // let Mocha know we're done async testing
        aVehicle.$dispose();  
        aVehicle=null;
       }),
      it('When engine not started  then state=="KO"', function (done){ 
       sinon.stub($, 'ajax').yieldsTo('success', {
              started: false,
              message: 'Engine condition'});             
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        aVehicle.engine.startEngine("engine/start/123");
        assert.equal(aVehicle.engine.state,"KO");
        done(); // let Mocha know we're done async testing
        aVehicle.$dispose();  
        aVehicle=null;
       }),
      it('When engine starts fails then error returned', function (done){ 
       sinon.stub($, 'ajax').yieldsTo('error', {
              errorCode: "100",
              message: 'Engine condition messed up'});             
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        try{
        aVehicle.engine.startEngine("engine/start/123");
        } catch(ex){
          console.log("Exception thrown");
        }
        assert.throws($.ajax);
        done(); // let Mocha know we're done async testing
        aVehicle.$dispose();  
        aVehicle=null;
       }),

      it('When engine starts fails then error thrown', function (done){ 
       sinon.stub($, 'ajax').throws("Engine Start Error");             
        var aVehicle;       
        aVehicle  = new classes.Vehicle();
        try{
        aVehicle.engine.startEngine("engine/start/123");
        } catch(ex){
          console.log("Exception thrown");
        }
        assert.throws($.ajax);
        done(); // let Mocha know we're done async testing
        aVehicle.$dispose();  
        aVehicle=null;
       })

    }),

     describe('FakeServerRequest', function() {

     
      before(function() {
       var server;
      })
      after(function(){
       
      })
      beforeEach(function(){
       server = sinon.fakeServer.create(); 
      })
      afterEach(function(){
      server.restore();
      })

      

      xit('FakeServer called ', function (done){               
        
        server.respondWith("GET", "/twitter/api/user.json", [
            200, 
            {"Content-Type": "application/json"}, 
            '[{"id": 0, "tweet": "Hello World"}]'
        ]);
         
        $.get("/twitter/api/user.json", function (data) {
            console.log(data); // [{"id":0,"tweet":"Hello World"}] 
        });
        server.respond();         
        
       })

    })


    })