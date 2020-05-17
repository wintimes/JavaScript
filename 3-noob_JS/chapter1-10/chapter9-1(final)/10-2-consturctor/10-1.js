function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    document.getElementById('demo').innerHTML =
    "Jonh".constructor + "<br>" +
    (3.15).constructor + "<br>" +
    false.constructor + "<br>" +
    [1, 2, 3, 4].constructor + "<br>" +
    {name:'jonh', age:34}.constructor + "<br>" +
    new Date().constructor + "<br>" +
    // new Car().constructor + "<br>" + ????
    Math.PI.constructor + "<br>" +
    function(){}.constructor ;
}