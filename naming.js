function calcSum(arrPrice) {
	let x = 0;
	arrPrice.forEach(i => {
		x += i;
	});
	return x;
}

let userPrice = [10000, 20000, 30000];
console.log(calcSum(userPrice));