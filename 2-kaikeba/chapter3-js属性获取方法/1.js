window.onload=function(){
      var div = document.getElementsByTagName("div")[0];
      var style = getAttr(div,'width')
      alert(style);
}
function getAttr(obj, attr){
     //我们把它们封装为一个函数，注意了在全局下定义的函数的都会默认设置为window对象的方法，
     //所以以后我们调用方法的时候就可以直接用然后省略前面的对象，
     //当然了你这样var style=window.getAttr(div,'width');调用也是木有问题的。
    var style;
     if(obj.currentStyle) {   //当有这个属性的时候currentStyle
        style = obj.currentStyle[attr]; //兼容IE 我测试的是ie5+
     }
     else{
        style = getComputedStyle(obj,false)[attr]; //主流浏览器
     }
     return style;
}