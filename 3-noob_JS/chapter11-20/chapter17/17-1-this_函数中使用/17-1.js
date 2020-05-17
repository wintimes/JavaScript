"use strict" //严格模式下函数无法绑定到this上
document.getElementById("demo").innerHTML = myFunction();
function myFunction(){
    return this;
}