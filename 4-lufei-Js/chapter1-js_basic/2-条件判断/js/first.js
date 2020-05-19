// var name = 'hlt';
// function hello(){
//     alert('hello' +' '+ name );
// }
/*
(
    匿名函数-->function(){
        //作为一个整体进行调用
        var name = 'hlt';
        function hello(){
        alert('hello' +' '+ name );
        //变量也好作用域也好都只会再这个匿名函数中
}
}
)(
  自执行函数--自己执行自己   
)
*/
(function(){
    var name = 'hlt';
    var hello =function(){
        alert('hello ' + name );
    }
    window.first = hello;
})()