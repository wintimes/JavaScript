//toString() 转换成字符串
var a = 100;
var c = a.toString();
alert(typeof(c));
//字符串换成数字
var str = "123.000";
var a = parseInt(str);
var b = parseFloat(str);
//布尔型数据
console.log(!!0) //false
//注意要把任何数据转化为布尔型数据，在值的前面加上两个！感叹号就可以了，!!0 False
// 其余的为true