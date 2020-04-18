function myFunction(){
    var y = 5;
    var x = document.getElementById('demo');
    x.innerHTML = y + 2;
}
function myFunction1(){
    var i;
    var cars = new Array();
    cars[0] = 'BMW';
    cars[1] = 'Benz';
    cars[2] = 'Volvo';
    for (i = 0; i < cars.length; i++){
        document.write(cars[i] + "<br>");
        /*
        存疑
        
         */
        // // document.getElementById('demo1').innerHTML = cars[i]; /
        // var x = document.getElementById('demo1');
        // x.innerHTML = cars[i];
    }
}