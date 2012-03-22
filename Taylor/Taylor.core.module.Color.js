(function(){
    
    if(!Taylor.core.module.Color){
        
       Taylor.core.module.Color = {};
        Color = Taylor.core.module.Color;
    }
    
    Taylor.core.module.Color = function(r,g,b){
        
        this.r = r;
        this.g = g;
        this.b = b;
    }
   Taylor.core.module.Color.__proto__ = Taylor.core.module.Color.prototype = {
        
        add:function(r,g,b){
            
            this.r += r;
            this.g += g;
            this.b += b;
        },
        random:function(){
            
            return new Taylor.core.module.Color(Math.floor(Math.random*10)/10,Math.floor(Math.random*10)/10,Math.floor(Math.random*10)/10);
        },
        copy:function(colorObject){
            
             if(colorObject instanceof Taylor.core.module.Color)
                return new Color(colorObject.r,colorObject.g,colorObject.b);
             else {
                 
                 alert('object prototype error');
             }
        }
        
    };
    
    
})()
