function myFunction(){
    var person = {
        fName: 'John',
        lName: 'Doe',
        age: 25
    };
    var txt = ""
    for ( x in person){
        txt = txt +'\n'+ person[x];
    }

    document.getElementById('demo2').innerHTML = txt ;
}

function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}XMLDocument