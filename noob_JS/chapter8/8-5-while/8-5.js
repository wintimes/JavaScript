function myFunction(){
    var x = "",i = 0;
    while( i < 5){
        x = x + "this integer is " + i + '<br>';
        i++;
    }

    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}