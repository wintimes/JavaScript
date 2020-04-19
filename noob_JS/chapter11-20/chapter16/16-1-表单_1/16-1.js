function myFunction(){
    var x, text;
    x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10 ) {
        text = "输入错误";
    } else{
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
}