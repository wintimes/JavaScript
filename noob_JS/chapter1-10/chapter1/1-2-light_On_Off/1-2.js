var onOff = true;
function changeImage(){

    if(onOff == true){
        myimage.src ="./images/pic_bulbon.gif"
        onOff = false;
    }else{
        myimage.src ="./images/pic_bulboff.gif"
        onOff = true;
    }
}