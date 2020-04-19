function myFunction(){
    var x = "";

    for (var i = 0; i < 10 ; i++){
        if(i == 3) continue;
        x = x + '\n' + i
    }
    document.getElementById('demo2').innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}