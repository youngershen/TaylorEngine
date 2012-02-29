Taylor = {}
window.Taylor = Taylor;

(function(){
	
	Taylor.$ = {};
    window['$'] = Taylor.$;
    Taylor.core = {};	
    
    Taylor.core.s = function(){
        
    };

    Taylor.core.init = function(){
        
        if(!window.Taylor){
            
            window['Taylor'] = Taylor;
        }
        
    };
    
    Taylor.core.__dynamicLoadSource__ = function(args){
        
        var argArray =new Array();
        for(var i in args){
            
            argArray.push(arguments[i])
        
        }    
    
    };
    
    Taylor.core.domParse = function(type,domConfig){
         
        $.debug("type is==="+type);
        
        for(var i in attributes){
            
            $.debug(attributes[i]);
        }  
        $.debug(attributes['type']);  
        var documentObjectConfig = {
            
        };    
            
    }
    
    
    
    
    Taylor.$.debug = function(args){
        
          
          var logInfo = "";
          var date = new Date(); 
          for(var i in arguments){
               logInfo += arguments[i];
          }
          console.log("["+date+"]"+logInfo);
    };


})();