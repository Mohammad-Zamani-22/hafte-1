let numb1 = prompt("enter number one");
let numb2 = prompt("enter number two");
let numb3 = prompt("enter number three");

// way 1:

// if(numb1 > numb2 && numb1>numb3){
    //  console.log(numb1);
// }else if (numb2 > numb1 && numb2>numb3 ){
    // console.log(numb1);
// }else if (numb3>numb1 && numb3>numb2 ){
    // console.log(numb1);
// }

// way 2 
let result = Math.max(numb1,numb2,numb3);
alert(result);

