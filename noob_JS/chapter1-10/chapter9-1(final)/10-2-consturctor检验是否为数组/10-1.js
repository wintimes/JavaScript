function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

var myDate = new Date();
document.getElementById("demo").innerHTML = isDate(myDate);
function isDate(myDate){
    return myDate.constructor.toString().indexOf("Date") > -1;
}