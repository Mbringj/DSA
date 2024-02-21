function getNthFibo(n, lastof, last) {
  if(n==0) {
    return lastof;
  }
  if(n==1) {
    return last;
  }
  
  return getNthFibo(n-1, last, last+lastof)
}

console.log(getNthFibo(45,0,1))