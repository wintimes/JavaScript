const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};//创建常量对象
car.color = "red";//修改属性

car.owner = "Johnson";// 添加属性

document.getElementById("demo").innerHTML =
    "Car owner is " + car.owner;
////但是我们并不能对常量对象重新赋值
////举例
try {
    const car1 ={type:"Fiat", model:"500", color:"white"};
     car1 = {type:"Volvo", model:"EX60", color:"red"}; //不能对《常量对象》重新赋值。
}catch(err){
    document.getElementById("demo1").innerHTML = err;
}
////可以修改元素 常量数组：
    const cars = ["1", "2", "3"];
    cars[0] = "4";//修改数组元素，而不是全部重新定义
    cars.push("6");//添加数组元素，可以实现。
////不可以对《常量数组》重新赋值
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // 错误

