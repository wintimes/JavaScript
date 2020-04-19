function myFunction(){
   var person = {
       firstName: "John",
       lastName: "Doe",
       age: 50,
       eyeColor: "blue"
   };
   var person = null;
   document.getElementById("demo1").innerHTML = typeof person; //null只会清空对象值不会改变对象内容。
}
function displayDate(){
    document.getElementById('demo2').innerHTML = Date();
}