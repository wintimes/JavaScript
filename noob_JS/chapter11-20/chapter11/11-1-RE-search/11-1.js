function displayDate(){
    document.getElementById('time').innerHTML = Date();
}
function myFunction(){
    var str = " Visit Runoob ！";
    var n = str.search(/Runoob/i);
    document.getElementById("demo").innerHTML = n;

}