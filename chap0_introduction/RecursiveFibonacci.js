function getNthFibo(n) {
  if(n <= 1) {
    return n;
  } else {
    return getNthFibo(n-1) + getNthFibo(n-2);
  }
}

console.log(getNthFibo(45))