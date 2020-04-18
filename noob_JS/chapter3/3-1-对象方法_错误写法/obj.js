var person = {
    firstName : "jack",
    lastName : "tom",
    id : 5566,
    fullName : function()
	{
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById('demo').innerHTML = person.fullName;// 不加（）
////methodName : function(){}
//objectName.methodName()  其中methodName()为方法 methodName为属性。