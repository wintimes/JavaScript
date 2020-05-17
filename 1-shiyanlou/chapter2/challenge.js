function star(i) {
    for (var j = 1; j <= i; j++){
        for (var k = 1; k <= j; k++) {
            document.write("*");
        }
        document.write("<br >");
    }
}
do {
    var n = prompt("Please input a interge");
    if (Number(n) > 0 && parseInt(n) == parseFloat(n)) {
        star(n);
    } else {
        alert("输入错误，请输入一个正整数");
    }
} while (!(Number(n) > 0 && parseInt(n) == parseInt(n)));