a = 5;
show();
var a ;
function show(){

}
/*
关键理解js的解析机制：
    1-遇到script标签的话js就进行预解析，
    2-将变量var和function声明提升，但是不会执行function,
    3-然后进入上下文执行，上下文执行执行预解析同样操作，
        直到没有var和function，再开始执行上下文。

            如上：预备解析
            1- function show(){}
            2- var a;
            3- a=5;
            4- show();
*/