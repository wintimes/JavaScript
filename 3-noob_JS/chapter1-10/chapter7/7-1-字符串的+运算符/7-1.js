function myFunction(){
    txt1 = "a";
    txt2 = "b";
    txt3 = txt1 + txt2;
    document.getElementById("demo").innerHTML=txt3;
}
function myFunction1(){
    txt4 = "c";
    txt5 = "d";
    txt6 = txt4 + " " + txt5 ;
    document.getElementById("demo2").innerHTML = txt6;
}


function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}