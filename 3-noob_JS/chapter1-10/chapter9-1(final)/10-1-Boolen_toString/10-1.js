function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    document.getElementById('demo').innerHTML =
    String(false) + "<br>" +
    String(true );
    document.getElementById('demo1').innerHTML =
    false.toString() + "<br>" +
    true.toString();

}