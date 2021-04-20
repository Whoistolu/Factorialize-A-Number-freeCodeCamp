function factorialize(num) {
    let output = 1;
    for (var i=1; i<=num; i++) {
        output *= i;
    }
    return output;
  }
  console.log(factorialize(15));