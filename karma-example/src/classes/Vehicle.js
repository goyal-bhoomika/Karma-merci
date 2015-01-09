Aria.classDefinition({
    $classpath : 'classes.Vehicle',
    $dependencies : [ "aria.utils.String" ,
                      "classes.Engine"],
    $constructor : function () {
       // console.log("Constructor of Vehicle");
        this.color = this.DEFAULT_COLOR;
        this.engine = new classes.Engine();        
    },
    $destructor : function () {
       // console.log("Destructor of Vehicle");
         this.engine.$destructor();        
    },
    $statics : {
        DEFAULT_COLOR : "White"                 
    },
    
    $prototype : {
        __setColorDefaultCB : function() {
            // ...
        },
        getColor : function () { 
        //console.log("getColor of Vehicle");               
           return this.color;
        },
        setColor : function (color) {
            this.color = color;          
        },
        /*getFuelLevel : function(){
         this.fetchResourceFromServer("http://localhost:9876/someresouce/getFuelLevel",function(){ console.log("getFuelLevel callback");})
        }, */
        getFuelLevel : function(src){
         this.fetchResourceFromServer(src,function(){ console.log("getFuelLevel callback");})
        },
        /**
         * This method retrieves a resource file on the server
         * @param {String} the resource name
         * @param {Object} an asynchronous callback
         */
        fetchResourceFromServer : function (resource, callback) {
           // var myResource = [this.path, resource].join("/");
           var myResource = resource;
            aria.core.IO.asyncRequest({
                url : myResource,
                method : "get",
                callback : {
                    fn : this.resourceFetched,
                    scope : this,
                    onerror: this.resourceNOTFetched,       // callback error handler - optional
                    onerrorScope: this,          // optional
                    args : {
                        callback : callback
                        // We propagate our callback argument
                    }
                }
            });
        },

        /**
         * @private Internal callback when a resource has been fetched with fetchResourceFromServer
         * @param {Object} the response object wrapping the xhr response object
         * @param {Object} Arguments provided through the original callback object
         */
        resourceFetched : function (response, args) {
            // We retrieve our callback object from the args object
            var callback = args.callback;
            // Do some stuff with the response content
            console.log("Response is " + response);

            // We are done, finally calling back the caller!
            this.$callback(callback);
        },
        resourceNOTFetched : function () {
            // We retrieve our callback object from the args object
           // var callback = args.callback;
            // Do some stuff with the response content
            console.log("Response is not received");

            // We are done, finally calling back the caller!
           // this.$callback(callback);
        }
    }
    // ...
});