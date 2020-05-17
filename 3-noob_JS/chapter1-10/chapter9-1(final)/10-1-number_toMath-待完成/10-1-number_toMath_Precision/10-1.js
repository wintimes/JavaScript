function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    var x = 123;
    document.getElementById('demo').innerHTML =
    String(x) + "<br>" +
    String(123) + "<br>" +
    String(100 + 23 );
    document.getElementById('demo1').innerHTML =
    x.toString() + "<br>" +
    (123).toString() + "<br>" +
    (100 + 23).toString();

}