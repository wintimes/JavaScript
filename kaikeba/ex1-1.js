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
console.log(document.querySelector('.box'))
/*

        document.querySelector('选择器--')
        - 通过选择器进行选取
        - 遇到第一个符合条件的元素，就返回第一个元素
        - 如果获取一个不存在的元素，得到的结果会是null!!!
        - document / 指定父级

 */