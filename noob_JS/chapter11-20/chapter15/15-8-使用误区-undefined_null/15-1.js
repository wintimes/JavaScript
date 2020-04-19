//null 用于对象
//undefined 用于 变量，属性和方法。
if (myObj !== null && typeof myObj !== "undefined"); ////错误
if (typeof myObj !== "undefined" && myObj !== null) ; //正确