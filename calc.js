class Calculator {
  constructor() {
    this.currNum = 0;
  }
  add(num) {
    return this.currNum += num
  }
  subtract(num) {
    return this.currNum -= num
  }

  multiply(num) {
    return this.currNum *= num
  }

  divide(num) {
    return this.currNum /= num
  }
  clear() {
    this.currNum = 0
  }

}
