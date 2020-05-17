function displayDate(){
    document.getElementById('time').innerHTML = Date();
}

function myFunction(){
    arr = [1, 2, 3]
    if(arr instanceof Array){
        document.getElementById('demo').innerHTML = 'arr 是一个数组'
    }else{
        document.getElementById('demo').innerHTML = "arr 不是一个数组"
    }

}