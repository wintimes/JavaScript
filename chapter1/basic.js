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