import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { CampaignType, campaignsState } from '../store/campaigns';
import { Table } from '../components/Table';
import { convertToDDMMYYYY, isACampaign, mergeCampaigns } from '../lib/utils';
import Pagination from '../components/Pagination';
import { Filters } from '../components/Filters';

declare global {
    interface Window {
        addCampaigns: (campaign: CampaignType[]) => void;
    }
}

export const Home = () => {
    const [, setCampaigns] = useRecoilState(campaignsState);

    useEffect(() => {
        const addCampaigns = (campaigns: CampaignType[]) => {
            if (!Array.isArray(campaigns)) {
                throw new Error('Campaigns must be an array!')
            }

            if (!campaigns.length) {
                throw new Error('Please provide at least one campaign!')
            }

            const validatedCampaigns = campaigns.filter((campaign) => isACampaign(campaign)).map((campaign => {
                campaign.startDate = convertToDDMMYYYY(campaign.startDate)
                campaign.endDate = convertToDDMMYYYY(campaign.endDate)

                return campaign;
            }))

            if (!validatedCampaigns.length) {
                throw new Error('Please provide at least one valid campaign!')
            }

            setCampaigns(campaignState => {
                return {
                    ...campaignState,
                    campaigns: mergeCampaigns(campaignState.campaigns, validatedCampaigns)
                }
            })

            console.info(`Successfully added or updated ${validatedCampaigns.length} campaign${validatedCampaigns.length > 1 ? 's' : ''}!`)
        }

        window.addCampaigns = addCampaigns
    }, [])

    return (
        <div>
            <h1 className="px-6 py-4 inline-block min-w-full text-xl">
                Campaigns
            </h1>
            <Filters />
            <Table />
            <Pagination />
        </div>
    )
}