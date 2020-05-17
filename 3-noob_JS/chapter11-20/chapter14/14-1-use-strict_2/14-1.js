"use strict";
x = {p1:10,p2:20};
//不允许删除函数
delete x //error
function x(p1,p1){}; //error
var x = 010;//error不允许使用8进制
// var x = \010 ;//error 不允许转义符

//报错--不允许对 只读属性赋值。
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;

//不允许对一个使用getter方法读取的属性进行赋值
var obj = {get x() {return 0} };
obj.x = 3.14;

//不允许删除一个不允许删除的属性
delete Object.prototype;

//变量名不能使用eval字符串
var eval = 3.14;

//变量名不能使用arguments字符串
var arguments = 3.14;

//不允许使用以下这种语句
with (Math){x = cos(2)};

//安全原因，作用域eval()创建的变量不能被调用。
eval (" var x = 2 ");
alert(x);

//禁止this关键字指向全局对象
function f(){
    return !this;
}// 返回false , 因为"this" 指向 全局对象， "!this" 就是false

function f(){
    "use strict";
    return !this;
}//返回 true 因为严格模式下，this为undefined, 所以"!this"为true。

function f(){
    "use strict"
    this.a = 1;
}
f(); //this 未定义

//////因此使用构造函数时，如果忘了加new.this不再指向全局对象，而是报错。
