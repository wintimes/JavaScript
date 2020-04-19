"use strict";
x = 3.14;

myFunction();
function myFunction(){
    y = 3.14;
}

//在函数内部声明式局部作用域（只在函数内部使用严格模式）
x = 3.14;
myFunction();
function myFunction(){
    "use strict";
    y = 3.14;
}
