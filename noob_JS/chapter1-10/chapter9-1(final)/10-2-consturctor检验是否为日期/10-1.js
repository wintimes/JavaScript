function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

var fruits = ['b','o', 'a', 'ma'];
document.getElementById("demo").innerHTML = isArray(fruits);
function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array") > -1;
}