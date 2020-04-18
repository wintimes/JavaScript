function myFunction(a, b){
    var a = parseInt(document.getElementById('aInteger').value);
    var b = parseInt(document.getElementById('bInteger').value);
    var z = document.getElementById('demo');
    var x = a + b ;
    if(a > b)
    {
        return alert('不能执行！');

    }else{
        z.innerHTML = x ;
    }

}
function myFunction1(){
    var i = document.getElementById('demo1');
    i.innerHTML = '不能执行！！！！！';
}