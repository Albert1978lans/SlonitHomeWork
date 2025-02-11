function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}
let max = 100
let min = 1
let randomNumber = getRandom(max, min)
console.log(`Компьютер 1 загадал число: ${randomNumber}`)
console.log('  ')

while (true) {
	let trialNum = Math.floor((max - min) / 2) + min
	console.log(`компьютер 2: пробую число ${trialNum}`)
	if (trialNum === randomNumber) {
		console.log('Компьютер 1: Угадал!')
		break
	}
	else if (randomNumber < trialNum) {
		max = trialNum
		console.log(`Компьютер 1: меньше`)
	}
	else if (randomNumber > trialNum) {
		min = trialNum
		console.log(`Компьютер 1: больше`)
	}
	console.log(' ')
}