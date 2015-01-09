Aria.classDefinition({
    $classpath : 'classes.Fruit',
       $constructor : function () {
        this.color = "White";
        //console.log("Constructor of Fruit");
    },
    $destructor : function () {
        //console.log("Destructor of Fruit");
    },
    $statics : {
        DEFAULT_COLOR : "White"                 
    },
    
    $prototype : {
        __setColorDefaultCB : function() {
            // ...
        },
        getColor : function () { 
        //console.log("getColor of Fruit");               
           return this.color;
        },
        setColor : function (color) {
            this.color = color;
          
        }
    }
    // ...
});