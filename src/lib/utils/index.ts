import type { CampaignType } from '../../store/campaigns'

export const allExpressionsTrue = (expressions: boolean[]) => {
	return expressions.every(expression => expression === true)
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isACampaign = (obj: any): obj is CampaignType => {
	if (typeof obj !== 'object' || obj === null) {
		console.warn('Inputted campaign is not an object', obj)

		return false
	}

	const validation = allExpressionsTrue([
		'id' in obj,
		'name' in obj,
		'startDate' in obj,
		'endDate' in obj,
		'Budget' in obj,
		typeof obj.id === 'number',
		typeof obj.name === 'string',
		typeof obj.startDate === 'string',
		typeof obj.endDate === 'string',
		typeof obj.Budget === 'number',
	])

	if (!validation) {
		console.warn('Inputted campaign is in the wrong format.', obj)
	}

	return validation
}

export function mergeCampaigns(array1: CampaignType[], array2: CampaignType[]): CampaignType[] {
	const idMap = new Map<number, CampaignType>()

	// First, add all the objects from the first array to the map
	for (const obj of array1) {
		idMap.set(obj.id, obj)
	}

	// Then, iterate over the objects from the second array
	for (const obj of array2) {
		if (idMap.has(obj.id)) {
			// If an object with the same id already exists in the map,
			// create a new object with the updated properties
			const existingObj = idMap.get(obj.id)
			const updatedObj = { ...existingObj, ...obj }
			idMap.set(obj.id, updatedObj)
		} else {
			// If the object doesn't exist in the map yet, add it
			idMap.set(obj.id, obj)
		}
	}

	// Finally, convert the map to an array of objects and return it
	return Array.from(idMap.values())
}



