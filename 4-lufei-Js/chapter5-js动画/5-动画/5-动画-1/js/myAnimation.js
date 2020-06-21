var speed = 0;
/*
 obj 当前的对象
 attr 当前对象的属性
 endTarget  末尾位置
*/
function startAnimation(obj,attr,endTarget,fn){
    //针对多物体运动中 的 定时器要绑定在 对应的物体上
    clearInterval(obj.timer);
    obj.timer = setInterval( function (){
        var objAttrCur = 0;
        //0.获取样式属性
        //透明度处理
        if( attr === 'opacity' ){
            objAttrCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);                            
        }else{
            objAttrCur = parseInt(getStyle(obj,attr));
        }
        //1.求速度                        
        speed = ( endTarget - objAttrCur ) / 20 ;
        speed = endTarget > objAttrCur ? Math.ceil(speed) : Math.floor(speed);
        //2.临界处理
        if(endTarget === objAttrCur){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
            return;

        }
        //3.运动起来
        //透明度处理
        if( attr === 'opacity' ){                            
            obj.style[attr] = `alpha(opacity:${ objAttrCur + speed})`;
            obj.style[attr] = (objAttrCur + speed) / 100;
        }else{
            obj.style[attr] = objAttrCur + speed + 'px';                           
        }
    },30)                    
}
function getStyle(obj,attr){
    //兼容ie
    if(obj.currentStyle){
        return obj.currentStyle[attr];                        
    }else{
    //兼容 常用浏览器 
        return getComputedStyle(obj,null)[attr];
    }
}