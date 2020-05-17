var person = {
    firstName : "john",
    lastName  : "Doe",
    id :5566,
    myFunction : function(){
        return this.firstName  + " " + this.lastName ;
    }
}
document.getElementById("demo").innerHTML = person.myFunction();