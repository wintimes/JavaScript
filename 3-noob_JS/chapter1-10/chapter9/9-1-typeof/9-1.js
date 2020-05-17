function myFunction(){
    var i = document.getElementById('input1');
    document.getElementById('demo1').innerHTML =
    typeof "john" + "<br>" +
    typeof  3.14 + "<br>" +
    typeof false + "<br>" +
    typeof [1, 2, 3, 4] + "<br>" +
    typeof i + "<br>" +
    typeof undefined + "<br>" +
    typeof{name:'jonh', age: 34};
}



function displayDate(){
    document.getElementById('demo2').innerHTML = Date();
}