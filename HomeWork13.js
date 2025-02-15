function multiply(a, b) {
	return a * b
}
function sum(a, b) {
	return a + b
}
function divide(a, b) {
	return a / b
}
function subtract(a, b) {
	return a - b
}
const operations = {
	multiply: multiply,
	sum: sum,
	divide: divide,
	subtract: subtract
}

function calculate(a, b, operationFunction) {
	return operationFunction(a, b)
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18
console.log(calculate(6, 3, operations['subtract']))         // 3
console.log(calculate(6, 3, operations['divide']))           // 2
console.log(calculate(6, 3, operations['sum']))              // 9