function printNumber(num) {
  for(let i=0; i<num; i++) {
    console.log(i);
  }
}

printNumber(4);

let sum = [2,1,4,5].reduce(function(prevVal, curentVal, array, index){
  return prevVal + curentVal;
})

console.log(sum)

let javasCriptObject = {};
let arrayJavascript = [1,4,5,6,7]

javasCriptObject.array = arrayJavascript;

console.log(javasCriptObject);
javasCriptObject.title = 'Algorithms';

console.log(javasCriptObject);

function countDownToZero(n) {
  if(n<0){
    return;
  } else {
    console.log(n);
    countDownToZero(n-1);
  }
}

countDownToZero(12);


