var person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
var x = person1.fullName.call(person2);

document.getElementById("demo").innerHTML = x;