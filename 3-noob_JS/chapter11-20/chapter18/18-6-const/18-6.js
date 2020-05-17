try{
    const PI = 3.141592653589793;
    //const 用于声明一个或多个常量，
    //声明时必须进行初始化，且初始化后值不可再修改：
    PI = 3.14;
}catch(err) {
    document.getElementById('demo').innerHTML = err;
}
//初始化正确的写法
const PI = 3.14159265359;
/*
const PI;
PI = 3.14159265359; //错误的初始化方式
*/
