import { atom, selectorFamily } from 'recoil'
import data from '../lib/data'

export type CampaignType = {
	id: number;
	name: string;
	startDate: string;
	endDate: string;
	Budget: number;
}

type PageType = {
	take: 10 | 25 | 50 | 100;
	page: number;
}

export const campaignsState = atom({
	key: 'campaignsState',
	default: data as CampaignType[],
})

export const campaignsFilterValue = selectorFamily({
	key: 'campaignsFilterValue',
	get: ({ take, page }: PageType) => ({ get }) => get(campaignsState).slice(page * take, page * take + take)
})