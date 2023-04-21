import { atom, selector } from 'recoil'
import data from '../lib/data'

export type CampaignType = {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    Budget: number;
}

export const campaignsState = atom({
	key: 'campaigns',
	default: data as CampaignType[],
})

export const campaignsFilterValue = selector({
	key: 'campaignsFilter',
	get: ({ get }) => ({
		total: get(campaignsState).length,
	}),
})