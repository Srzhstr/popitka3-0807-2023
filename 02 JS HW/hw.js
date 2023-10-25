let UserAge = Number(prompt('Type your age')); 
 
 
let GeneralAge = 18; 
let maxValue = 0; 
 
maxValue = UserAge >= 18 ? true : false; 
 
console.log(`${maxValue}`);
 
//2nd Task 
 
let firstValue = Number(prompt(`Enter your first math`)); 
let secondValue = Number(prompt(`Enter your second math`));
MathOperators = prompt('Enter your math operation');
result = 0;
if (MathOperators == '+') {
    result = firstValue + secondValue;
    console.log(`${firstValue}${MathOperators}${secondValue}=${result}`);
  }
  if (MathOperators == '-') {
    result = firstValue - secondValue;
    console.log(`${firstValue}${MathOperators}${secondValue}=${result}`);
  }
  if (MathOperators == '/') {
    if (secondValue == 0) {
      console.log('Cannot divide by 0');
    } else {
      result = firstValue / secondValue;
      console.log(`Result = ${result}`);
    }
  }
  if (MathOperators == '*') {
    result = firstValue * secondValue;
    console.log(`Result  = ${result}`);
  }
