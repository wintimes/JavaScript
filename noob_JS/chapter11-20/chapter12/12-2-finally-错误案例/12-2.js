// function myFunction(){
//     var message, x;
//     message = document.getElementById("p01");
//     message.innerHTML = "";
//     x = document.getElementById("demo").value;
//     try{
//         if(x == "") throw "值是空的";
//         if(isNaN(x))throw "值不是数字";
//         x = Number(x);
//         if(x > 10) throw "太大";
//         if(x < 5 ) throw "太小";
//     }catch(err) {
//         message.innerHTML = "错误： " + err + ".";
//     }finally {
//         document.getElementById("demo").value = "";
//     }
// }
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}