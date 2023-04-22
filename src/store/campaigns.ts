import { atom, selector } from 'recoil'
import data from '../lib/data'
import { DefaultValue } from 'recoil'

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

type FilterType = {
	search: string;
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
		pagination: { page: 1, limit: 3 },
		filter: { search: '' },
	},
})

export const filteredCampaigns = selector({
	key: 'filteredCampaigns',
	get: ({ get }) => {
		const { campaigns, filter, pagination } = get(campaignsState)
		const { page, limit } = pagination
		const filteredItems = campaigns.filter((campaign) =>
			campaign.name.toLowerCase().includes(filter.search.toLowerCase())
		)
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
		set(campaignsState, newFilter instanceof DefaultValue ? newFilter : (old) => ({ ...old, filter: { search: newFilter } }))
	},
})

export const setPagination = selector({
	key: 'setPagination',
	get: ({ get }) => get(campaignsState).pagination,
	set: ({ set }, newPagination) => {
		set(campaignsState, newPagination instanceof DefaultValue ? newPagination : (old) => ({ ...old, pagination: newPagination }))
	},
})