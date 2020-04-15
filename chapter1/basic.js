console.log("hello world");
// 数组概述
var myarray = new Array(1, 2, 3, 4, 5);
var myarray = [1, 2, 3, 4, 5];
var color = ["red", "green", "blue", "yellow"];
// color[0]; return "red"
// color[1];
// color[2];
// color[3];
// color[4]; return undefined
var student = [
    ["张三", "男", "18"],
    ["李四", "女", "20"]
];
// student[0][2]; returns "18"
var color = ["red", "green", "blue", "yellow"];
color[0] = "black";
color; //returns ["black","green","blue","yellow"];
var color = ["red", "green", "blue", "yellow"];
color.length; //return 4
"1:2:3:4".split(":");// returns ["1", "2","3", "4"]
"a|b|c".split("|");// returns ["","a", "b","c"]
["1", "2", "3", "4"].join(":");// returns "1:2:3:4"
["","a", "b", "c"].join("|");// returns "a|b|c"
var arr = ["1", "2", "3", "4"];
arr.push("5","6");
arr;// returns ["1", "2", "3", "4", "5", "6"];
var arr = ["1", "2", "3", "4"];
// arr.pop(); //returns 4
// arr; // returns ["1", "2", "3"]
var arr1 = [];
// arr1.pop();// returns undefined
// arr1; // returns []
var carname ="shiyanlou";
var carname = 'shiyanlou';
var answer = "i love 'shiyanlou'";
var answer = 'i love "shiyanlou"';
// var x1 = 'i've got no right to take my place...';错误不可行。
var x1 = "i have got no right to take my place...";
var x1 = "I've got no right to take my place...";
var y = "He is called \"Johnny\"";
var x2 = "He is called \"Tom\"";
// 链接字符串
var one = "Hello,jack.";
var two = "i'm rose";
result = one + two;
var myNum = 123;
var myString = myNum.toString();
typeof myString;
//字符串转换
var myString = "123";
var myNum = Number(myString);
typeof myNum;
//查询字符串长度
var myString = "hello world";
myString.length;
//查询第一个字符；
myString[0];
///在字符串中查询子字符串并且提取
//str.indexOf(searchValue, fromIndex);
"Blue Sky".indexOf("Blue"); // returns  0
"Blue Sky".indexOf("Ble"); // returns -1
"Blue Sky".indexOf("Sky", 0); // returns  5
"Blue Sky".indexOf("Sky", -1); // returns  5
"Blue Sky".indexOf("Sky", 5); // returns  5
"Blue Sky".indexOf("Sky", 9); // returns -1
"Blue Sky".indexOf("", 0); // returns  0
"Blue Sky".indexOf("", 5); // returns 5
"Blue Sky".indexOf("", 9); // returns 8

"Blue Sky".indexOf("blue");//returns -1
//slice(strat，end)，第一个参数 start 是开始提取的字符位置，
// 第二个参数 end 是提取的最后一个字符的后一个位置。
// 所以提取从第一个位置开始，直到但不包括最后一个位置。
// 另外第二个参数也可以不写，不写代表某个字符之后提取字符串中的所有剩余字符。
// 比如：
"Blue sky".slice(0, 3);
// 注：slice(strat，end)，第一个参数 start 是开始提取的字符位置，
// 第二个参数 end 是提取的最后一个字符的后一个位置。所以提取从第一个位置开始，
// 直到但不包括最后一个位置。
// 另外第二个参数也可以不写，不写代表某个字符之后提取字符串中的所有剩余字符。比如：
"Blue sky".slice(2, 4);//returns "ue"
var string ="I like study";
string.toLowerCase(); // returns "i like study"
string.toUpperCase(); // returns "I LIKE STUDY"

var string = "I like study";
string.replace("study", "sleep"); // returns "I like sleep"
var num = 8;
var numString = num.toString();
numString;//returns "8"
var result = true;
var resultString = result.toString();
resultString;//returns "true"
var num = 16;
