var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var output = document.getElementById("output");
var clear = document.getElementById("clear");

var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");


//  Create a function that multiplies two numbers passed in as arguments. Return the product.
function multFn(number1, number2){
  var product = number1 * number2;
  output.value = product;
}

//  Create a function that adds two numbers passed in as arguments. Return the sum.
function addFn(number1, number2) {
  var sum = number1 + number2;
  output.value = sum;
}

//  Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subFn(number1, number2) {
  var difference = number1 - number2;
  output.value = difference;
}

//  Create a function that divides two numbers passed in as arguments. Return the quotient.
function divFn(number1, number2){
  var quotient = number1 / number2;
  output.value = quotient;
}

// Clear function

function clearFn(number1, number2, output){
  number1.value = '';
  number2.value = '';
  output.value = '';
}

/*  Create a function that accepts three arguments.
      1. First number
      2. Second number
      3. A function that performs an operation on them
    Return the value of the operation. */

add.addEventListener("click", function(){
  var num1 = parseInt(n1.value);
  var num2 = parseInt(n2.value);
  addFn(num1,num2);
});
subtract.addEventListener("click", function(){
  var num1 = parseInt(n1.value);
  var num2 = parseInt(n2.value);
  subFn(num1,num2);
});
multiply.addEventListener("click", function(){
  var num1 = parseInt(n1.value);
  var num2 = parseInt(n2.value);
  multFn(num1,num2);
});
divide.addEventListener("click", function(){
  var num1 = parseInt(n1.value);
  var num2 = parseInt(n2.value);
  divFn(num1,num2);
});

clear.addEventListener("click", function(){
  clearFn(num1,num2,output);
});