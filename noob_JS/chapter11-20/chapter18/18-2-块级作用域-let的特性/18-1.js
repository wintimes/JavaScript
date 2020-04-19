var x = 10;
{
    var x = 2;  // x = 2
}
document.getElementById('demo').innerHTML = x; //x = 2
var y = 10;
{
    let y = 2; //y = 2
    // document.getElementById('demo1').innerHTML = "y: " + y;   //只有放在这里才可以使用。
}
document.getElementById('demo1').innerHTML = "y: " + y; //y = 10