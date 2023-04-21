import { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { CampaignType, campaignsState } from '../store/campaigns';
import Table from '../components/Table';
import { isACampaign, mergeCampaigns } from '../lib/utils';

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

            const validatedCampaigns = campaigns.filter((campaign) => isACampaign(campaign))

            if (!validatedCampaigns.length) {
                throw new Error('Please provide at least one valid campaign!')
            }

            setCampaigns(oldCampaigns => mergeCampaigns([...oldCampaigns], [...validatedCampaigns]))

            console.info('Successfully added / updated campaigns!')
        }

        window.addCampaigns = addCampaigns
    }, [])

    return (
        <div>
            <Table />
        </div>
    )
}