function myFunction(){
    var x=5;
    document.getElementById("demo2").innerHTML= x==8;
    document.getElementById("demo3").innerHTML= x==="5";
    document.getElementById("demo4").innerHTML= x===5;
    document.getElementById("demo5").innerHTML= x!=8;
    document.getElementById("demo6").innerHTML= x!=="5";
    document.getElementById("demo7").innerHTML= x!== 5;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}