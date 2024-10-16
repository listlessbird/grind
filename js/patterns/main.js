function squarePattern() {
  let pattern = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

squarePattern();

function trianglePattern(n = 5) {
  let pattern = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

trianglePattern();

function triangleNumberPattern(n = 5) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += j + 1;
    }
    pattern += "\n";
  }

  console.log(pattern);
}

triangleNumberPattern();

function triangleRowNumber(n = 5) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += i;
    }
    pattern += "\n";
  }

  console.log(pattern);
}

triangleRowNumber();

function invertedTriangle(n = 5) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      pattern += " * ";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

invertedTriangle();

//  1 -> 5
//  2 -> 4
//  3 -> 3

function invertedNumberTriangle(n = 6) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i + 1; j++) {
      pattern += i;
    }
    pattern += "\n";
  }

  console.log(pattern);
}

invertedNumberTriangle();
