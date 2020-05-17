function isValid(str){
    return /^\w + $/.test(str);
}
str1 = "1234abd___"
str2 = "$3234#"
function myFunction(){
    document.getElementById('demo').innerHTML =
        isValid(str1) + '<br>' + isValid(str2);
}