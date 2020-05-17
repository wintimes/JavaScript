var carName = "Volvo";
document.getElementById('demo').innerHTML =
 'i can display ' + window.carName;
 //let 的声明的全局作用域不属于window 对象
 let carName1  = "Volvo";
 document.getElementById('demo1').innerHTML =
 'i can display ' + window.carName1; // 不属于 
