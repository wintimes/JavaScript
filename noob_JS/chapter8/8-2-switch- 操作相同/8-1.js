function myFunction(){
    var d=new Date().getDay();
    switch(d)
    {

        case 1: x = "星期1";
        break;
        case 2: x = "星期2";
        break;
        case 3: x = "星期3";
        break;
        case 4: x = "星期4";
        break;
        case 5: x = "星期5";
        break;
        case 0:
        case 6:
        x =  "周末愉快！"
    }
    document.getElementById("demo2").innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument