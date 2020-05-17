var str = "2019-12-25";
// 转换日期格式
str = str.replace(/-/g, '/'); // "2010/08/01";
// 创建日期对象
var date = new Date(str);
////反之，日期类型转化为格式化的字符串：

//完整的格式化
var time2 = new Date().format("yyyy-MM-dd hh:mm:ss");
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    //处理年份
    var reYear = /(y+)/;
    var resultYear = reYear.exec(fmt);
    if (resultYear)
    {
        var yearformatPart = resultYear[0];//匹配到的格式化字符
        var yearVal = (this.getFullYear() + "").substr(4 - yearformatPart.length);
        fmt = fmt.replace(yearformatPart, yearVal);
    }
    for (var k in o) {
        var re = new RegExp("(" + k + ")");
        var re = re.exec(fmt);
        if (re) {
            var Val = "" + o[k];//本次需要替换的数据
            var formatPart = re[0];//匹配到的格式化字符
            var replaceVal = (formatPart.length == 1) ? (Val) : (("00" + Val).substr(Val.length));
            fmt = fmt.replace(formatPart, replaceVal);
        }
    }
    return fmt;
}