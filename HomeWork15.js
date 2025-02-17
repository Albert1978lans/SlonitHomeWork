// Напишите функцию createLogger(), которая должна возвращать объект с методами:
// log(message): сохраняет сообщение в массив.
// getLogs(): выводит все сохраненные сообщения.
// Массив с сообщениями должен быть доступен только внутри замыкания. Посторонние функции не должны иметь прямого доступа к этому массиву.

function createLogger() {
	const arrMessages = []
	return {
		log(message) {
			arrMessages.push(message)
		},
		getLogs() {
			arrMessages.forEach(message => console.log(message))
		}
	}
}

const logger = createLogger()
logger.log('1-message')
logger.log('2-message')
logger.log('3-message')
logger.log('4-message')
logger.getLogs()

//==================================================================================================//

// Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
// Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
// Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне.

function createRandomGenerator(min, max) {
	return () => Math.floor(Math.random() * (max - min + 1) + min) // Максимум и минимум включаются
	// return () => Math.floor(Math.random() * (max - min - 1)) + min + 1 // Максимум и минимум не включаются
}
let randomNamber = createRandomGenerator(20, 27)

console.log(randomNamber())
