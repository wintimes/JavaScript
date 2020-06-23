window.onload = function(){
    //1.获取标签 
    var slider = document.getElementById('slider');
    var slider_main = document.getElementById('slider_main');
    var allBoxs = slider_main.children;
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var slider_index = document.getElementById('slider_index');
    var iNow = 0;//当前可视元素的索引
    //2.动态创建索引器
    for(var i = 0;i < allBoxs.length; i++){
        var span = document.createElement('span');
        if(i === 0 ){
            span.className = 'slider_index_icon current';
        }else{
            span.className = 'slider_index_icon'
        }
        span.innerText = i + 1;
        slider_index.appendChild(span);
    }
    //3.让元素归位
    var scroll_w = parseInt(getStyle(slider,'width'));

    for( var j = 1; j < allBoxs.length; j++){
        allBoxs[j].style.left = scroll_w + 'px';
    }
    //4.监听下一张的按钮
    next.onclick = function(){
        /*
        *1.让当前的图片左移
        2.让这一张图片快速的到右面
        3.让这个元素动画进入
        * 
        * */
       startAnimation(allBoxs[iNow],{
           "left": -scroll_w
       })
       //让iNow 更新
       iNow ++;
       if(iNow >= allBoxs.length){
           iNow = 0;
       }
       allBoxs[iNow].style.left = scroll_w + 'px';
       startAnimation(allBoxs[iNow],{
           "left": 0
       })
       changeIndex();
    }
    //5.监听上一张的按钮
    prev.onclick = function(){
        /*
        *1.让当前的图片左移
        2.让上一张图片快速的到右面
        3.让这个元素动画进入
        * 
        * */
       startAnimation(allBoxs[iNow],{
           "left":   scroll_w
       })
       //让iNow 更新
       iNow --;
       if(iNow < 0){
           iNow = allBoxs.length - 1;
       }
       allBoxs[iNow].style.left = -scroll_w + 'px';
       startAnimation(allBoxs[iNow],{
           "left": 0
       })
       changeIndex();
    }
    //6.开启定时器  自动播放
    timer = setInterval(autoPlay,2000);
   //自动播放的代码 
    function autoPlay(){
            startAnimation(allBoxs[iNow],{
           "left": -scroll_w
            })
            //让iNow 更新
            iNow ++;
            if(iNow >= allBoxs.length){
                iNow = 0;
            }
            allBoxs[iNow].style.left = scroll_w + 'px';
            startAnimation(allBoxs[iNow],{
                "left": 0
            })
            changeIndex();           
    }
    slider.onmouseover = function (){
        clearInterval(timer);
    }
    slider.onmouseout = function (){
        timer = setInterval(autoPlay,2000)
    }
    
    var slider_index_icon = slider_index.children;
    //7.遍历索引器 并 添加监听事件
    for(var i = 0; i < slider_index_icon.length; i++ ){
        slider_index_icon[i].onmousedown = function (){
            //6.1 获取当前点击的索引
            var index = parseInt( this.innerText ) - 1;
            //当前的索引与 iNow 进行对比 如果是 index > iNow 相当于点击下一个的操作
            if(index > iNow){
                startAnimation(allBoxs[iNow],{
                    'left': -scroll_w
                })
                allBoxs[index].style.left = scroll_w + 'px';
            }else if(index < iNow){
                startAnimation(allBoxs[iNow],{
                    'left': scroll_w
                })
                allBoxs[index].style.left = -scroll_w + 'px';
            }            
            iNow = index;                
            startAnimation(allBoxs[iNow],{
                "left": 0
            })
            //改变索引器
            changeIndex();            
        }
    }




    //控制当前的索引
    function changeIndex(){
        for(var i = 0;i< slider_index_icon.length ;i++){
            slider_index_icon[i].className = 'slider_index_icon';
        }
        slider_index_icon[iNow].className = 'slider_index_icon current';
    }
}