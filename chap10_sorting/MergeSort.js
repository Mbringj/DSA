function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  console.log(left);
  console.log(right);
  while(left.length && right.length) {
    if(left[0]<=right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  let result = [...sorted,...left,...right];
  return result;
}

let sarr = [3,2,4,7,1,9];

let result = mergeSort(sarr);

console.log(result);