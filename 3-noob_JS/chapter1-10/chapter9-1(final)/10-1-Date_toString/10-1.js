function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    var obj = new Date();
    document.getElementById('demo').innerHTML =
    String(obj) + "<br>" +
    String(true );
    document.getElementById('demo1').innerHTML =
    new Date().toString() + "<br>" +
    true.toString();

}