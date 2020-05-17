if (3 > 2) {
    console.log("我真帅");
} else {
    console.log("不可能");
}

var d = new Date().getDay();

if (d == 0) {
    console.log("今天星期天");
} else if (d == 1) {
    console.log("monday");
} else if (d == 2){
    console.log("tunesday");
} else if (d == 3){
    console.log("thursday");
} else {
    console.log("...");
}

switch (d) {
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("mon.");
        break;
    case 2:
        console.log("tue.");
        break;
    case 3:
        console.log("thur.");
        break;
    case 4:
        console.log("wen.");
        break;
}