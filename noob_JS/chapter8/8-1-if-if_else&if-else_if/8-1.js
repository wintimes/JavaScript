function myFunction(){
    var x= "";
    var time = new Date().getHours();
    if(time < 10){
        x = "早上好"
    }else if(time >= 10 && time < 16){
        x = "今天好"
    }else{
        x = "晚上好"
    }
    //多元表达式版
    /*
    


    */
    document.getElementById("demo2").innerHTML = x ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}