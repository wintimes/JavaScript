function myFunction1(){
    document.getElementById('demo').innerHTML = 123e5;
    document.getElementById('demo1').innerHTML = Math.PI;
    document.getElementById('demo2').innerHTML = 'Math.PI';
    document.getElementById('demo3').innerHTML = 5 + 6;

}
function myFunction2(){
    var length;
    length = 6;
    document.getElementById('demo4').innerHTML = length;
}
function myFunction3(){
    var length = 16;                                  // Number 通过数字字面量赋值
    var points = x * 10;                              // Number 通过表达式字面量赋值
    var lastName = "Johnson";                         // String 通过字符串字面量赋值
    var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
    var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
    }
function myFunction4(){
    document.getElementById('demo5').innerHTML = 16 + "Volvo";//字符串输出。
}
function myFunction5(){
    var lastName = "jack", age = 30; job = 'carpenter';
    var lastName ='jack';
}