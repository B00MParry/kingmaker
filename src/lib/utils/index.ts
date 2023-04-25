import type { CampaignType } from '../../store/campaigns'

/**
 * Checks if all the expressions in an array are true
 * @param {boolean[]} expressions An array of boolean expressions
 * @returns A boolean indicating if all the expressions are true
 */
export const allExpressionsTrue = (expressions: boolean[]) => {
	return expressions.every(expression => expression === true)
}

/**
 * Checks if an object is a campaign
 * @param {any} obj Takes any object and checks if it is a campaign 
 * @returns {boolean} Returns a boolean indicating if the object is a campaign
 */
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
		new Date(obj.startDate) <= new Date(obj.endDate)
	])

	if (!validation) {
		if (!(new Date(obj.startDate) < new Date(obj.endDate))) {
			console.warn('Inputted campaign has an invalid date range.', obj)
		} else {
			console.warn('Inputted campaign is in the wrong format.', obj)
		}
	}

	return validation
}

/**
 * Merges two arrays containing campaign objects
 * @param {CampaignType[]} array1 First array to be merged
 * @param {CampaignType[]} array2 Second array to be merged
 * @returns {{CampaignType[]}}
 */
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

/**
 * Checks if a date is in a given range
 * @param {Date} date Date to be checked
 * @param {Date} startDate Start date of the range
 * @param {Date} endDate End date of the range
 * @returns {boolean} Returns a boolean indicating if the date is in the range
 */
export const isDateInRange = (date: Date, startDate: Date, endDate: Date): boolean => {
	return date >= startDate && date <= endDate
}

/**
 * Converts a date string from YYYY-MM-DD to DD/MM/YYYY
 * @param {string} date String date to be formatted
 * @returns {string} Returns a string with the date formatted
 */
export const formatInputDate = (date: string) => date.split('-').reverse().join('/')

/**
 * Converts a date string from DD/MM/YYYY to YYYY-MM-DD
 * @param {string} date 
 * @returns {string} Returns a string with the date formatted
 */
export const unFormatInputDate = (date: string) => date.split('/').reverse().join('-')

/**
 * Converts a date string from DD/MM/YYYY to MM/DD/YYYY
 * @param {string} date 
 * @returns {string} Returns a string with the date formatted
 */
export const convertToDDMMYYYY = (date: string) => {
	const splitDate = date.split('/')

	return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`
}