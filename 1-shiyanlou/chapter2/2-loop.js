for (var i = 1; i<= 100; i++){
    console.log(i);
}

for (var i = 1; i<= 100; i++){
    if(i % 7 == 0){
    console.log(i);
    break;
    }
}
for (var i = 1; i<= 100; i++){
    if(i % 7 == 0){
    console.log(i);
    continue;
    }
}

var i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

var i = 1;
do{
    console.log(i);
    i++;
    break;
} while(i < 100);