var x = 2;
var x = 3;
document.getElementById('demo').innerHTML = x;
/*
    var x = 2  //合法
    let x = 3 // 不合法
    {
        var x = 4; //合法
        let x = 5; //不合法
    }
*/

/*
    let x = 2  //合法
    let x = 3 // 不合法
    {
        let x = 4; //合法
        let x = 5; //不合法
    }
*/

/*
    let x = 2; //合法
    {
        let x = 5; //合法
    }
    {
        let x = 4; //合法
    }
*/