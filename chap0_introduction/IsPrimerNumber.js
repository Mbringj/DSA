function isPrimerNumber(num) {
  if(num === 1) {
    return true;
  } else {
    for( let i=2; i<num; i++) {
      if(num%i == 0) return false;
    }
  }
  return true;
}

if(isPrimerNumber(77)) {
  console.log("is primer");
} else {
  console.log("is not primer");
}