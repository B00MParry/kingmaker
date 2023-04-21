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