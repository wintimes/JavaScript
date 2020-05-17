function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    var y = '5';
    var x = + y;//可将变量转换为数字。
    document.getElementById('demo').innerHTML =
        typeof y + "<br> " + typeof x;
    var y1 ='jonjon';
    var x1 = + y1;//变量若不是数字，但值为NaN，类型依然是number。
    document.getElementById('demo1').innerHTML =
        typeof y1 + "<br> " + x1;
}