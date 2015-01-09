Aria.classDefinition({
    $classpath : 'classes.Engine',
    $dependencies : [ "aria.utils.String" /* just one static dep */ ],
    $constructor : function () {
        this.type = "16V";
        this.fuel = "diesel";
        this.state = "KO";
       // console.log("Constructor of Engine");
    },
    $destructor : function () {
        //console.log("Destructor of Engine");
    },
    $statics : {
                   
    },
    
    $prototype : {
        engineStartedSuccessCallBack : function(callingObj,data){
          if(data.started ===true){
            callingObj.state = "OK";
            callingObj.startAccessories(); 
          } else{
             callingObj.state = "KO";
           }
        },

        startAccessories : function() {

        },
        
        startEngine : function(src){
         this.makeServerRequest(src, this, this.engineStartedSuccessCallBack);
         },
        /**
         * Ideally this method should be in another class, keeping it here 
         * to keep the example simple
         */
        makeServerRequest : function (resource, callingObj,callback) {
           $.ajax({
              url: resource,
              dataType: 'json',
              success: function(data) {
                console.log(data);
                callback(callingObj,data);
              },
              error: function() {
                console.log("Error retrieving server response");
                throw("Engine Error");
              }
            });
        }
    }
    // ...
});