function myFunction(){
    car = ['BMW','VOLVO','SAAB','BENZ'];
    for (var i= 0, l = car.length; i < l ; i++ ){
        x = x+ car[i] + " <br>"
        x = x + "this integer " + i + "<br>"
    }

    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument