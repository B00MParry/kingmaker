function generateData(n) {
	const data = []

	for (let i = 0; i < n; i++) {
		const id = i + 1
		const name = generateName()
		const startDate = generateDate()
		let endDate = generateDate()
		const Budget = Math.floor(Math.random() * 100000)

		// Ensure endDate is after startDate
		while (new Date(endDate) <= new Date(startDate)) {
			endDate = generateDate()
		}

		const object = { id, name, startDate, endDate, Budget }
		data.push(object)
	}

	return data
}

function generateName() {
	const vowels = 'aeiou'
	const consonants = 'bcdfghjklmnpqrstvwxyz'
	const nameLength = Math.floor(Math.random() * 7) + 4
	let name = ''

	for (let i = 0; i < nameLength; i++) {
		if (i % 2 === 0) {
			const index = Math.floor(Math.random() * consonants.length)
			name += consonants[index]
		} else {
			const index = Math.floor(Math.random() * vowels.length)
			name += vowels[index]
		}
	}

	return name.charAt(0).toUpperCase() + name.slice(1)
}

function generateDate() {
	const day = Math.floor(Math.random() * 28) + 1
	const month = Math.floor(Math.random() * 12) + 1
	const year = Math.floor(Math.random() * 7) + 2020

	return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
}