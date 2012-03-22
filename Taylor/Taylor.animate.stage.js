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
            canvas.setAttribute('align','center');
            
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
    
    /**
     * 
     */
    that.coordinates = function(ctx,canvas,callback){
        
        var height = canvas.height;
        var width = canvas.width;
        $.debug(width);
        ctx.beginPath();
        ctx.fillStyle = "#999";
        ctx.moveTo(0,height);
        ctx.lineTo(width,height);
        ctx.moveTo(0,height);
        ctx.lineTo(0,0);
        ctx.quadraticCurveTo(10.5,10.3,0,0);
        var imageData = ctx.getImageData(0,0,width,height);
        
        $.debug(imageData);
        
      //  ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        ctx.stroke();
    }
})();
