var getName = function(){
    console.log(2);
}
function getName(){
    console.log(1);
}
document.getElementById('demo').innerHTML = getName();


