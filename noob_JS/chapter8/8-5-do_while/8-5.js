function myFunction(){
    var x = "",i = 0;
    do{
        x = x + "this number is " + i + "<br>";
        i++;
    }while(i < 5)

    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument