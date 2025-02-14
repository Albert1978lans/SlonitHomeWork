function upperCaseFirstCharacter(str) {
	if (!str) return str
	return str[0].toUpperCase() + str.slice(1)
}

console.log(upperCaseFirstCharacter("hello world")) // Hello world

//====================================================================//

function getStr(str, numberOfCharacters) {
	const arrSigns = [' ', '(', ')', ',', '.', '!', '?', ':', ';', '/']
	let resStr
	if (str.length <= numberOfCharacters) return str
	if (str.length > numberOfCharacters) {
		resStr = str.slice(0, numberOfCharacters)
		for (let i = resStr.length - 1; i >= 0; i--) {
			if (arrSigns.some(el => el === resStr[i])) {
				return resStr = resStr + '...'
			} else {
				resStr = resStr.slice(0, i)
			}

		}
		// если первое слово в строке длинее чем numberOfCharacters, то обрезаем его
		return str.slice(0, numberOfCharacters) + '...'
	}
}

console.log(getStr('kgfksjd uierhi kh:ffs ', 20))

//=====================================================================//

function stringSubstring(str1, str2) {
	return str1.includes(str2) || str2.includes(str1)
}
let s2 = 'в лесу родилась ёлочка, в лесу она росла'
let s1 = 'ёлочка, в лесу'

console.log(stringSubstring(s1, s2))