var name = "jack", age = 17;
var obj = {
    name: 'tom',
    objAge:this.age,
    myFun:function(){
        console.log( this.name + "年龄" + this.age);
    }
}
var db={
    name: "dema",
    age:99
}
console.log(obj.myFun.call(db));
console.log(obj.myFun.apply(db));
console.log(obj.myFun.bind(db)());

