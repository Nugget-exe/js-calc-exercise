var first = window.prompt("enter your first number");
var second = window.prompt("enter your 2nd number");
var operator = window.prompt("enter your operator");

switch(operator) {
  case "add":
    console.log(first + second);
    break;
  case "sub":
    console.log(first - second);
    break;
  case "divide":
    console.log(first / second);
    break;
  case "muti":
    console.log(first * second)
    break;
  default:
    console.log("Error dumbass, you messed up");
}
