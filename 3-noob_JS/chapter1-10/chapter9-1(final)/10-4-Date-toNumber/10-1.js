function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    d = new Date();
    document.getElementById('demo').innerHTML =
        Number(d) + "<br>" +
        d.getTime();
}