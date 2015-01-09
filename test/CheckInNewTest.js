    var assert = chai.assert;
    var should = chai.should();// node.js core module
    var expect = chai.expect;

    <script src="chai-jquery.js"></script>


  describe('CheckInNew_test_suite', function(){

    describe('CheckInNewTest_Probing', function() {

      function _setupData(nameJSON) {
         
        Aria.load({
                classes: ["modules.view.merci.segments.servicing.subModules.checkin.ssci.templates.pages.CheckInNewScript"],
                onerror : errorOnStart
            });  

             function errorOnStart() {
               console.log("Error loading js object");
               console.log("hello");
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
        //sinon.spy(aria.core.IO, 'asyncRequest');
        
      })
      afterEach(function(){
        // runs after each test in this block
        //aria.core.IO.asyncRequest.restore();
      })



      it('pnrType', function (){       
        //var aCheckInNewScript ;
       aCheckInNewScript = new modules.view.merci.segments.servicing.subModules.checkin.ssci.templates.pages.CheckInNewScript();
       //console.log(aCheckInNewScript);
       sinon.stub(aCheckInNewScript,'getSelectedDropDownValue').returns("frequentFlyerNumber");
        aCheckInNewScript.pnrType();
    // aCheckInNewScript.$dataReady();
        //assert("true");
       //
        expect($('#ffSelected'))to.have.value("frequentFlyerNumber");
       // assert(aCheckInNewScript.a);

       })



    })
  })

      