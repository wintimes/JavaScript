function test(p){
    var a = 5,b = 12;
    return p>1 ? p<b ? p>b : p=6:p=3;
    //解决方法，找多元运算符的头和尾。
    /*
        1- p>1 ? 整体 :p=3
            1- p>1 成立  整体
                1- p<b ? p>b :p=6
                    1- p<b 成立 p>6
                    2- p<b 不成立 p=6
            2- p>1 不成立 p=3

    */
}

document.write(test(9));//综上为false

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}