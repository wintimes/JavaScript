//获取元素
document.getElementById('btn');
console.log(document.getElementById('btn'))
/*
    document - file
    . - 的
    getElementById
        - get
        - Element
        - By
        - Id
    在当前文档中通过id获取元素

    JS 是区分大小写的！！
    console.log(放置想检查的元素)
 */
//第二种方式,通过元素选择器来选择
document.querySelector('#btn')
document.querySelector('.box')
console.log(document.querySelector('#btn'))