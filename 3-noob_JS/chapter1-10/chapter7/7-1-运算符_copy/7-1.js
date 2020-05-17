function myFunction(){
    var y = 5;
    var x = ++y;
    var demoP = document.getElementById('demo1')
    demoP.innerHTML = "x=" + x + " , y=" + y;
}
function myFunction1(){
    var y1 = 5;
    var x1 = y1++;
    var demoP = document.getElementById('demo2')
    demoP.innerHTML = "x1=" + x1 + " , y1=" + y1;
}
function myFunction2(){
    var y2 = 5;
    var x2 = 10;
    x2+=y2;
    var demoP = document.getElementById('demo3')
    demoP.innerHTML = "x2=" + x2 + " , y2=" + y2;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}