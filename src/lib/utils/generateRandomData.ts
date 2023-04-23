function generateData(n: number): { id: number, name: string, startDate: string, endDate: string, Budget: number }[] {
	const names: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Julia']
	const data: { id: number, name: string, startDate: string, endDate: string, Budget: number }[] = []
	for (let i = 0; i < n; i++) {
		let startDate: Date
		let endDate: Date
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
		const Budget: number = Math.floor(Math.random() * 100000)
		const id: number = i + 1
		const name: string = names[Math.floor(Math.random() * names.length)]
		data.push({
			id,
			name,
			startDate: `${startDate.getDate().toString().padStart(2, '0')}/${(startDate.getMonth() + 1).toString().padStart(2, '0')}/${startDate.getFullYear()}`,
			endDate: `${endDate.getDate().toString().padStart(2, '0')}/${(endDate.getMonth() + 1).toString().padStart(2, '0')}/${endDate.getFullYear()}`,
			Budget,
		})
	}
	return data
}