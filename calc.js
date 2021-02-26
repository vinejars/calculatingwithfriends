class Calculator {
  constructor() {
    this.currNum = 0;
    this.nextNum = 0;
    this.arrayNum1 = [];
    this.arrayNum2 = [];
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
    this.currNum = 0;
  }
}

document.getElementById("0").addEventListener("click", function () {
  document.getElementById("input").value += "0";
});

document.getElementById("1").addEventListener("click", function () {
  document.getElementById("input").value += "1";
});

document.getElementById("2").addEventListener("click", function () {
  document.getElementById("input").value += "2";
});

document.getElementById("3").addEventListener("click", function () {
  document.getElementById("input").value += "3";
});

document.getElementById("4").addEventListener("click", function () {
  document.getElementById("input").value += "4";
});

document.getElementById("5").addEventListener("click", function () {
  document.getElementById("input").value += "5";
});

document.getElementById("6").addEventListener("click", function () {
  document.getElementById("input").value += "6";
});

document.getElementById("7").addEventListener("click", function () {
  document.getElementById("input").value += "7";
});

document.getElementById("8").addEventListener("click", function () {
  document.getElementById("input").value += "8";
});

document.getElementById("9").addEventListener("click", function () {
  document.getElementById("input").value += "9";
});

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
