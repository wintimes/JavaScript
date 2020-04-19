var name = 'jack', age = 17;
var obj = {
    name : 'tom',
    objAge: this.age,
    myFun:function(){
    document.getElementById("demo").innerHTML =
        this.name + "年龄" + this.age;
    }
}

