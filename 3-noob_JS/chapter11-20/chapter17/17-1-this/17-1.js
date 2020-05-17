var person = {
    firstName :"John",
    lastName : "Doe",
    id : 5566,
    fullName : function(){
        return this.firstName + " " + this.lastName;
        //this 表示他所在方法的对象。
        //在上面的实例中，this 表示person 对象
        //fullName 方法所属的对象就是person。
    }
};
document.getElementById('demo').innerHTML = person.fullName();