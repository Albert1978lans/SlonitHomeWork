const someObj = {
	a: 20,
	b: 4,
	c: 3,
	d: 'fdfd',
	e: '3',
}

function sum() {
	let sum = 0
	for (let key in this) {
		if (typeof this[key] === 'number') {
			sum += this[key]
		}
	}
	return sum
}
someObj.sum = sum
console.log(someObj.sum()) //27

//=====================================================//

const user = {
	name: 'Vasya',
	friends: 5,
	likes: 19,
	projects: 7
}

function getKeysSortByDecrease() {
	let arrWithNumericKeys = []
	for (let key in this) {
		if (typeof this[key] === 'number') {
			arrWithNumericKeys.push([key, this[key]])
		}
	}
	return arrWithNumericKeys.sort((a, b) => b[1] - a[1]).map(el => el[0])
}

user.getKeys = getKeysSortByDecrease
console.log(user.getKeys())  // [ 'likes', 'projects', 'friends' ]