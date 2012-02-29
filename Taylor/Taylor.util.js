(function(){
    
    if(!Taylor.util){
        
        Taylor.util = {};
    }
    
    /*
     * var domConfig = {
     *      
     *         id    : 'id',
     *         type  : 'type',
     *         name  : 'name',
     *         class : 'class',
     *         children : {
     *     
     *              id   : 'id',
     *              type : 'type,
     *              name : 'name',
     *         }
     * }
     * 
     * 
     * 
     */
    
    Taylor.util.parseDomJson = function(domConfig){
        
        var jsonObj = eval('('+domConfig+')');
     };
    
     /*
      *    config = {
      *     
      *         id    : 'id',
      *         type  : 'type',
      *         language :'lang',    
      *         src   :'src'
      * }
      * 
      */ 
     Taylor.util.createJSDomObject = function(jsConfig){
         
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
    
    Taylor.util.loadJSFromFile = function(fileName){
        
        
        
    };
})();
