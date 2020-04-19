function displayDate(){
    document.getElementById('time').innerHTML = Date();
}
function myFunction(){
    var str = document.getElementById("demo").innerHTML;
    var txt = str.replace(/microsoft/i,"Runoob");
    document.getElementById("demo").innerHTML = txt;

}
function myFunction1(){
    var str = document.getElementById("demo1").innerHTML;
    var txt = str.replace("Microsoft","Runoob");
    document.getElementById("demo1").innerHTML = txt;
}