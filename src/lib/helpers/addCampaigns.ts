import { allExpressionsTrue } from '../utils'

export type CampaignType = {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    Budget: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function isACampaign(obj: any): obj is CampaignType {
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

export const addCampaigns = (campaigns: CampaignType[]) => {
	if (!Array.isArray(campaigns)) {
		throw new Error('Campaigns must be an array!')
	}

	if (!campaigns.length) {
		throw new Error('Please provide at least one campaign!')
	}

	const cleanedCampaigns = campaigns.filter((campaign) => isACampaign(campaign))

	if (!cleanedCampaigns.length) {
		throw new Error('Please provide at least one valid campaign!')
	}

	console.log('Added campaigns', cleanedCampaigns)
}