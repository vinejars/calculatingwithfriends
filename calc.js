class Calculator {
  constructor() {
    this.currNum = 0;
    this.nextNum = 0;
    this.array = [];
    this.array2 = [];
    this.operator;
  }
  convertNum(array) {
    return Number(array.join(""));
  }
  add() {
    return (this.currNum += num);
  }
  subtract() {
    return (this.currNum -= num);
  }

  multiply() {
    return (this.currNum *= num);
  }

  divide() {
    return (this.currNum /= num);
  }
  clear() {
    this.array = [];
    this.array2 = [];
    document.getElementById("input").value = "";
  }
}

let calc = new Calculator();

let inputVar = document.getElementById("input");

document.getElementById("0").addEventListener("click", function () {
  calc.array2.push("0");
  inputVar.value = calc.array2.join("");
});

document.getElementById("1").addEventListener("click", function () {
  calc.array2.push("1");
  inputVar.value = calc.array2.join("");
  // document.getElementById("input").value += "1";
});

document.getElementById("2").addEventListener("click", function () {
  calc.array2.push("2");
  inputVar.value = calc.array2.join("");

  // document.getElementById("input").value += "2";
});

document.getElementById("3").addEventListener("click", function () {
  calc.array2.push("3");
  inputVar.value = calc.array2.join("");
});

document.getElementById("4").addEventListener("click", function () {
  calc.array2.push("4");
  inputVar.value = calc.array2.join("");
});

document.getElementById("5").addEventListener("click", function () {
  calc.array2.push("5");
  inputVar.value = calc.array2.join("");
});

document.getElementById("6").addEventListener("click", function () {
  calc.array2.push("6");
  inputVar.value = calc.array2.join("");
});

document.getElementById("7").addEventListener("click", function () {
  calc.array2.push("7");
  inputVar.value = calc.array2.join("");
});

document.getElementById("8").addEventListener("click", function () {
  calc.array2.push("8");
  inputVar.value = calc.array2.join("");
});

document.getElementById("9").addEventListener("click", function () {
  calc.array2.push("9");
  inputVar.value = calc.array2.join("");
});

document.getElementById("plus").addEventListener("click", function () {
  calc.operator = "+";
  return operatorChecker();
});

document.getElementById("multiply").addEventListener("click", function () {
  calc.operator = "*";
  return operatorChecker();
});

document.getElementById("subtract").addEventListener("click", function () {
  calc.operator = "-";
  return operatorChecker();
});

document.getElementById("divide").addEventListener("click", function () {
  calc.operator = "/";
  return operatorChecker();
});

document.getElementById("clear").addEventListener("click", function () {
  return calc.clear();
});

document.getElementById("equals").addEventListener("click", function () {
  return operatorChecker();
});

function operatorChecker() {
  // let inputVar = document.getElementById("input");
  if (calc.array.length === 0) {
    console.log("is the 0 length running", "inputVar:", inputVar.value);
    calc.array.push(Number(calc.array2.join("")));
    calc.array2 = [];
    calc.array.push(calc.operator);
    inputVar.value = calc.array[0];
  } else if (calc.array.length === 2) {
    console.log(
      "is the 2 length running",
      "inputVar: ",
      inputVar.value,
      "array",
      calc.array
    );
    calc.array.push(Number(calc.array2.join("")));
    calc.array2 = [];

    if (calc.array[1] === "+") {
      calc.array[0] = Number(calc.array[0]) + Number(calc.array[2]);
      inputVar.value = calc.array[0];
    }
    if (calc.array[1] === "-") {
      calc.array[0] = Number(calc.array[0]) - Number(calc.array[2]);
      inputVar.value = calc.array[0];
    }
    if (calc.array[1] === "*") {
      calc.array[0] = Number(calc.array[0]) * Number(calc.array[2]);
      inputVar.value = calc.array[0];
    }
    if (calc.array[1] === "/") {
      calc.array[0] = Number(calc.array[0]) / Number(calc.array[2]);
      console.log(calc.array[0]);
      inputVar.value = calc.array[0];
    }
    calc.array.pop();
    calc.array.pop();
    calc.array.push(calc.operator);
  } else if (calc.array.length === 1) {
    calc.array.push(calc.operator);
    inputVar.value = "";
  }
}

// if (operator === "plus"){
//   this.currNum = convertNum(this.arrayNum1);
//   this.nextNum = convertNum(this.arrayNum2);
//    if(this.operator === '+'){
//      return add(this.currNum, this.nextNum)
//    }

/**
 * CHATTERBOX
 *
 * OKAY. so now what. i have no idea how to make the buttons actually on the calculator tbh. theyre just chillin on the bottom left rn
 */
