var person = {
    firstName : "jack",
    lastName : "tom",
    id : 5566,
    fullName : function()
	{
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById('demo').innerHTML = person.fullName();
 