function myFunction(){
    var array = new Array();
    var x;
    var txt= "";
    var txt1= "";
    array[0] = 1 ;
    array[2] = 12 ;
    array[3] = 13 ;
    array[9] = 19 ;
    array[10] = 110 ;

    for ( x in array){
        txt = txt +'\n'+ array[x];
    }
    for (var i = 0 ; i < 4; i++){
        txt1 = txt1 +'\n'+ array[i];
    }

    document.getElementById('demo2').innerHTML = txt ;
    document.getElementById('demo3').innerHTML = txt1 ;

}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument