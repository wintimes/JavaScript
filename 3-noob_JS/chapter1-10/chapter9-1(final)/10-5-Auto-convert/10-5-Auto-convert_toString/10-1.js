function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    var x = "0";
    var y = NaN;
    var z = "";
    var a = [];
    var b = null;
    var q = undefined;
    document.getElementById('demo').innerHTML =
        "Number : " + Number(x) + "<br>" +
        "String : " + String(x) + "<br>" +
        "Boolean : " + Boolean(x);
    document.getElementById('demo1').innerHTML =
        "Number : " + Number(y) + "<br>" +
        "String : " + String(y) + "<br>" +
        "Boolean : " + Boolean(y);
    document.getElementById('demo2').innerHTML =
        "Number : " + Number(z) + "<br>" +
        "String : " + String(z) + "<br>" +
        "Boolean : " + Boolean(z);
    document.getElementById('demo3').innerHTML =
        "Number : " + Number(a) + "<br>" +
        "String : " + String(a) + "<br>" +
        "Boolean : " + Boolean(a);
    document.getElementById('demo4').innerHTML =
        "Number : " + Number(b) + "<br>" +
        "String : " + String(b) + "<br>" +
        "Boolean : " + Boolean(b);
    document.getElementById('demo5').innerHTML =
        "Number : " + Number(q) + "<br>" +
        "String : " + String(q) + "<br>" +
        "Boolean : " + Boolean(q);


}