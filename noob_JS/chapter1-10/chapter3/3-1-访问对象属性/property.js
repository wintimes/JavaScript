var person = {
    firstName : "jack",
    lastName : "tom",
    id : 5566
};
document.getElementById('demo').innerHTML = person.firstName + " " + person["lastName"];
