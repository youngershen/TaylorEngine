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
             
                jsDomObject.exist = false;
             jsDomObject.onload = jsDomObject.onreadystatechange = function(){
                 
                  if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){  

                        jsDomObject.exist = true;                        
                  }
             };
            return jsDomObject;
     }; 
    
    Taylor.util.loadJSFromFile = function(url,id){
        
        var jsDom = Taylor.util.createJSDomObject({
            
                src:url || $.debug('load error'),
                id:id || null
        });
        //document.body.appendChild(jsDom);
        $.debug(jsDom.exist);
        oHead = document.getElementsByTagName("HEAD").item(0); 
        oHead.appendChild(jsDom);
        $.debug(jsDom.getAttribute('src'));
       
        return jsDom;
    };
})();
