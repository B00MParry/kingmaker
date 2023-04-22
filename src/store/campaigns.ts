import { atom, selector } from 'recoil'
import data from '../lib/data'
import { DefaultValue } from 'recoil'
import { allExpressionsTrue, unFormatInputDate } from '../lib/utils'

export type CampaignType = {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	Budget: number;
}

type PaginationType = {
	limit: number;
	page: number;
}

type DatesType = {
	startDate: string;
	endDate: string;
}

type FilterType = {
	search: string;
	dates: DatesType;
}

type CampaignStore = {
	campaigns: CampaignType[];
	pagination: PaginationType;
	filter: FilterType;
}

export const campaignsState = atom<CampaignStore>({
	key: 'campaignsState',
	default: {
		campaigns: data,
		pagination: { page: 1, limit: 10 },
		filter: {
			search: '', dates: {
				startDate: '',
				endDate: '',
			}
		},
	},
})

export const filteredCampaigns = selector({
	key: 'filteredCampaigns',
	get: ({ get }) => {
		const { campaigns, filter, pagination } = get(campaignsState)
		const { page, limit } = pagination
		const filteredItems = campaigns.filter((campaign) => {
			const campaignIncludesSearch = campaign.name.toLowerCase().includes(filter.search.toLowerCase())

			if (!filter.dates.startDate && !filter.dates.endDate) {
				return campaignIncludesSearch
			}

			const filterRequirements = [campaignIncludesSearch]

			const campaignStartDate = new Date(unFormatInputDate(campaign.startDate))
			const campaignEndDate = new Date(unFormatInputDate(campaign.endDate))
			const selectedStartDate = filter.dates.startDate ? new Date(unFormatInputDate(filter.dates.startDate)) : null
			const selectedEndDate = filter.dates.endDate ? new Date(unFormatInputDate(filter.dates.endDate)) : null

			if (selectedStartDate) {
				filterRequirements.push(campaignStartDate >= selectedStartDate || campaignEndDate >= selectedStartDate)
			}

			if (selectedEndDate) {
				filterRequirements.push(campaignStartDate <= selectedEndDate || campaignEndDate <= selectedEndDate)
			}
			
			return allExpressionsTrue(filterRequirements)
		})
		const paginatedItems = filteredItems.slice((page - 1) * limit, page * limit)

		return paginatedItems
	}
})

export const filteredCampaignsCount = selector({
	key: 'filteredCampaignsCount',
	get: ({ get }) => {
		const { campaigns, filter } = get(campaignsState)
		const filteredItemsCount = campaigns.filter((campaign) =>
			campaign.name.toLowerCase().includes(filter.search.toLowerCase())
		).length
		return filteredItemsCount
	}
})

export const setFilter = selector({
	key: 'setFilter',
	get: ({ get }) => get(campaignsState).filter.search,
	set: ({ set }, newFilter) => {
		set(campaignsState, newFilter instanceof DefaultValue ? newFilter : (old) => ({ ...old, filter: { ...old.filter, search: newFilter } }))
	},
})

export const setPagination = selector({
	key: 'setPagination',
	get: ({ get }) => get(campaignsState).pagination,
	set: ({ set }, newPagination) => {
		set(campaignsState, newPagination instanceof DefaultValue ? newPagination : (old) => ({ ...old, pagination: newPagination }))
	},
})

export const setDates = selector({
	key: 'setDates',
	get: ({ get }) => get(campaignsState).filter.dates,
	set: ({ set }, newDates) => {
		set(campaignsState, newDates instanceof DefaultValue ? newDates : (old) => ({ ...old, filter: { ...old.filter, dates: newDates } }))
	},
})