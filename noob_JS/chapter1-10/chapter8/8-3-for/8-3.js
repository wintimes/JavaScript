function myFunction(){
    var x = "";
    for ( var i = 0; i < 5; i++ ){
        x = x + "this integer " + i + "<br>"
    }
    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument