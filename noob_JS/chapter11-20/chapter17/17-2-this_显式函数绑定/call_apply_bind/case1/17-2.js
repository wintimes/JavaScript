var name = 'jack', age = 17;
var obj = {
    name : 'tom',
    objAge: this.age,
    myFun:function(){
    console.log(this.name + "年龄" + this.age);
    }
}
document.getElementById("demo").innerHTML = obj.objAge + "\n" + obj.myFun()
