function myFunction1(){
    var x = 5;
    var y = parseInt(document.getElementById('integer').value);
    var z = x + y;
    return z;

}
// var myVar = myFunction();
// docunment.getElementById("demo")
function myFunction(){
    document.getElementById("demo").innerHTML = myFunction1();
}