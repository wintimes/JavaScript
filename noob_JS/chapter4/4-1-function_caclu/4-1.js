function myFunction(a, b){
    var a = document.getElementById('integer1').value;
    var b = document.getElementById('integer2').value;
    return a*b;
}


document.getElementById('demo').innerHTML = myFunction();
