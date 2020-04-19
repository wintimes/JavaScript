function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    document.getElementById('demo').innerHTML =
    typeof myCar + "\n" + typeof new Date() + "\n" + typeof function(){};

}