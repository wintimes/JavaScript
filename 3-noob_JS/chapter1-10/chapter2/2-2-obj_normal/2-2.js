function Demo(){
    var obj = new Object();
    obj.name = "xxx";
    obj.age = 12;
    obj.firstF = function(){

    }
    obj.secondF = function(){

    }
    return obj;
}

//第二种
function Demo1(){
    this.name = "xxx";
    this.age = 12;
    this.firstF = function(){

    }
    this.secondF = function(){

    }
}

var one = new Demo1
//调用输出
document.write(one.age);
