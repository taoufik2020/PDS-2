var calcul = (n) => {
  if (n == 0) {
    return 0;
  }

  if (n % 3 == 0) {
    if (n % 5 == 0) {
      return "mult 3 && 5";
    }
    return "multi 3";
  }
  if (n % 5 == 0) {
    return "mult5";
  }
  return n;
};
console.log(calcul(1));
