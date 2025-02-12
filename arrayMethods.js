let arr = ["t", "e", "s", "t", "i", "r", "o", "v", "a", "n"]
// arr.slice([start], [end])
// mySlice(arr, [start], [end])
function mySlice(arr, start, end) {
	if (start && end) {
		return arr.filter((el, i) => i >= start && i < end)
	} else if (start && !end) {
		return arr.filter((el, i) => i >= start)
	} else {
		return arr.filter(el => true)
	}
}

console.log(arr.slice(3, 7))
console.log(mySlice(arr, 3, 7))

console.log(arr.slice(3))
console.log(mySlice(arr, 3))

console.log(arr.slice())
console.log(mySlice(arr))

//================================================================//

// myIndexOf(arr, item, from)
function myIndexOf(arr, item, from) {
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) {
			return i
		}
	}
	return -1
}

console.log(arr.indexOf('x', 1))
console.log(myIndexOf(arr, 'x', 1))

//================================================================//

// myIncludes(arr, item, from)
function myIncludes(arr, item, from) {
	for (let i = from; i < arr.length; i++) {
		if (arr[i] === item) {
			return true
		}
	}
	return false
}


console.log(arr.includes('x', 1))
console.log(myIncludes(arr, 'x', 1))