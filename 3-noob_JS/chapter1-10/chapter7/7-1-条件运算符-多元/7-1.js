function myFunction(){
    var age, voteable;
    age = document.getElementById('age').value;
    voteable = (age < 18) ? "年龄太小" : "年龄达标";
    document.getElementById("demo2").innerHTML = voteable;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}