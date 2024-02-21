function getNthFibo(n) {
  let sum = 0,
      last = 1,
      lastof = 0;

  if(n <= 1) {
    return n;
  }

  for(let i=1; i<n; i++) {
    sum = last + lastof;
    lastof = last;
    last = sum;
  }

  return sum;
}

console.log(getNthFibo(45))