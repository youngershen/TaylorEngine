(function(){
    
    if(!Taylor.animate.stage){
        
        Taylor.animate.stage = {};
    }
    
    var that = Taylor.animate.stage;
    
    that.getStage = function(stageConfig){
        
        var flag = testCanvas();
        
        var id = stageConfig.id || 'canvas',
            name = stageConfig.name || 'canvasTage',
            width = stageConfig.width || 320 ,
            height = stageConfig.height || 480;
        
         if(flag){   
         
            var canvas = document.createElement("canvas");
            canvas.setAttribute('id',id);
            canvas.setAttribute('name',name);
            canvas.setAttribute('width',width);
            canvas.setAttribute('height',height);
            
            document.getElementsByTagName('body').item(0).appendChild(canvas);
            
            return canvas;
                        
         }else{
             alert('you are bull shit');
             $.debug('load stage error , you browser may not support html5 canvas , you are all of bull shit');
         }        
    };
    
    var timeoutID,isContinued
    that.stageControl = function(ctx,callback){
        
        isContinued = true;
        
        //alert(callback());                
        callback();
        var loopEngine = function(){
        //    alert(callback);
            //callback();
           // if(isContinued)
           // timeoutID = setTimeout(loopEngine(),1000);
        }
        
        loopEngine();
    }
    
    that.testEvent = function(){
        
        
    }
    
    var testCanvas = function(){
        
        var canvas = document.createElement('canvas');
        if(canvas){
            if(canvas.getContext){
            
                var ctx = canvas.getContext('2d');
                if(ctx){
                    
                    return true;
                }else{
                    
                    return false;
                }
            }
        }
    }
})();
