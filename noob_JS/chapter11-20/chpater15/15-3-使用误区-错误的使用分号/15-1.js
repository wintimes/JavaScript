var x =
"hello world";
// var x1 = "hello      //回车换行会出现报错
//  world";
// 正确操作方式
var x1 = "hello \
world";
document.getElementById('demo').innerHTML =
    x + "\n" + x1;