Taylor = {}
window.Taylor = Taylor;

(function(){
	
	Taylor.$ = {};
    window['$'] = Taylor.$;
    Taylor.core = {};	
    
    Taylor.core.s = function(){
        
    };
    
    $.ready = function(method){
        
        window.onload = function(){
            
            method();
        }
        
    }

    Taylor.core.init = function(configuration){
        
        if(!window.Taylor){
            
            window['Taylor'] = Taylor;
        }
        
        if(arguments.length == 0){
            
            //no loaded js initlization mehtod
            
        }else{
            // loded js then initlization method
            
            
            
        }
        
    };
    
    Taylor.core.__dynamicLoadSource__ = function(args){
        
        for(var i in args){
            
            Taylor.core.loadJSFromFile("/js/Taylor/"+args[i]);
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

     Taylor.core.createJSDomObject = function(jsConfig){
         
            var id       = jsConfig['id'] || 'js',
                type     = jsConfig['type'] || 'text/javascript',
                language = jsConfig['language'] || 'JavaScript',
                src      = jsConfig['src'] || $.debug('init js domObject error')
            
            var jsDomObject = document.createElement("script");
                jsDomObject.setAttribute('id',id);
                jsDomObject.setAttribute('type',type);
                jsDomObject.setAttribute('language',language);
                jsDomObject.setAttribute('src',src);
            return jsDomObject;
     }; 
    
    Taylor.core.loadJSFromFile = function(fileName){
        
        var jsDom = Taylor.core.createJSDomObject({
            
                src:fileName
        });
        document.body.appendChild(jsDom);
        $.debug(jsDom.getAttribute('src'));
    };
    
    
    
})();