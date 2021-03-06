var person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
var x = person1.fullName.call(person2);

document.getElementById("demo").innerHTML = x;
// 总结：
/*
    1、在对象方法中， this 指向调用它所在方法的对象。
    2、单独使用 this，它指向全局(Global)对象。
    3、函数使用中，this 指向函数的所属者。
    4、严格模式下函数是没有绑定到 this 上，这时候 this 是 undefined。
    5、在 HTML 事件句柄中，this 指向了接收事件的 HTML 元素。
    6、apply 和 call 允许切换函数执行的上下文环境（context），
    即 this 绑定的对象，可以将 this 引用到任何对象。
*/