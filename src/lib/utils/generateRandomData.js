/**
 * This function generates random data for the table
 * @param n number of rows to generate
 * @returns an array of campaign objects
 * @example In the console: generateData(10), copy the result and paste it in ./src/lib/data/index.ts
 */
function generateData(n) {
	const names = [
		'Alice',
		'Bob',
		'Charlie',
		'David',
		'Eve',
		'Frank',
		'Grace',
		'Heidi',
		'Ivan',
		'Julia'
	]
	const data = []
	for (let i = 0; i < n; i++) {
		let startDate
		let endDate
		do {
			startDate = new Date(
				Math.floor(Math.random() * 7) + 2020,
				Math.floor(Math.random() * 12),
				Math.floor(Math.random() * 28) + 1
			)
			endDate = new Date(
				Math.floor(Math.random() * 7) + 2020,
				Math.floor(Math.random() * 12),
				Math.floor(Math.random() * 28) + 1
			)
		} while (endDate <= startDate)
		const Budget = Math.floor(Math.random() * 100000)
		const id = i + 1
		const name = names[Math.floor(Math.random() * names.length)]
		data.push({
			id,
			name,
			startDate: `${startDate
				.getDate()
				.toString()
				.padStart(2, '0')}/${(startDate.getMonth() + 1)
				.toString()
				.padStart(2, '0')}/${startDate.getFullYear()}`,
			endDate: `${endDate
				.getDate()
				.toString()
				.padStart(2, '0')}/${(endDate.getMonth() + 1)
				.toString()
				.padStart(2, '0')}/${endDate.getFullYear()}`,
			Budget
		})
	}
	return data
}