// var name = 'zxh';
// function hello(){
//     alert('hello' +' '+ name );
// }

(function(){
    var name = 'zxh';
    var hello = function (){
        alert('hello ' + name );
    }
    window.second = hello;
})()