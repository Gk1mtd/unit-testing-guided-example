function sum(a, b) {
  if (a === undefined && b === undefined)
    return 0
  
  if (a === undefined)
    return 0+b
  else if (b === undefined)
    return a+0

  let result
  result = a+b
  return result;
}

function subtract(a, b) {
  if (a === undefined && b === undefined)
  return 0

  if (a === undefined)
    return 0-b
  else if (b === undefined)
    return a-0

let result
result = a-b
return result;

  return;
}

function divide(a, b) {
  let result

  if (b !== 0) {
    result = a/b
    return result
  }
  else
    throw "Error"
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
