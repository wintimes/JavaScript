var x = 0;
var y = "0";
document.getElementById('demo').innerHTML = Boolean(x == y );//常规比较类型下数据类型是被忽略的。

var x1 = 10;
var y1 = "10";
document.getElementById('demo1').innerHTML = Boolean(x1 === y1); //详见 比较运算表中的法则

var x2 = 10 ;
switch(x2) {
    case 10: document.getElementById('demo2').innerHTML = "hello";//switch 语句会进行恒等运算
}

var x3 = 10 ;
switch(x3) {
    case "10": document.getElementById('demo3').innerHTML = "666" //不会执行是因为"10" ===10 为false
}
