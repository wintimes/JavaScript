function myFunction(a){
    var power = 10
    return a * power
}
document.getElementById('demo').innerHTML = myFunction(55) ///正确的结果。
//出错情况分析
function myFunction1(a){
    var
    power = 10;
    return         //js判断这句是完整的自动分号return;
    a * power
}
document.getElementById('demo1').innerHTML = myFunction1(55) //undefined