(function(){
    
    if(!Taylor.animate.shape)
        Taylor.animate.shape = {}
    
    var that = function(args){
       
       this.position = [];
       
        for(var i in arguments){
           
           $.debug(arguments[i].y);
            this.position[i] = arguments[i];
        }
    };
    
    Taylor.animate.shape.Shape =that;
    
    //that.__proto__ = Taylor.animate.shape.Shape.prototype = Taylor.animate.shape.Shape.__proto__;
    
    that.prototype={
        
        area : function(){
            
            for(var i in this.position){
                
               // $.debug(this.position[i].length());
            }
        },
        draw : function(canvas,color){
                
               var ctx = canvas.getContext('2d');
               $.debug(ctx);
               $.debug("color is"+color);
               var start = this.position[0];
               ctx.beginPath();
               ctx.fillStyle = "#F0F";
               ctx.moveTo(start.x,start.y);
               for(var i = 1 ; i < this.position.length;i++){
                   var vector2 = this.position[i];
                   ctx.lineTo(vector2.x,vector2.y);
               }
               ctx.lineTo(start.x,start.y);
               ctx.stroke();
               ctx.closePath;
        },
        
        
        
    }
    
   
    
        
})();
