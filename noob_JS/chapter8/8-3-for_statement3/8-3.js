function myFunction(){
    car = ['BMW','VOLVO','SAAB','BENZ'];
    var x = "";
    var i= 2, l = car.length;
    for (; i < l ;){
        x = x+ car[i] + " <br>";
        i++;
    }

    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument