import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { CampaignType, campaignsState } from '../store/campaigns';
import Table from '../components/Table';
import { isACampaign } from '../lib/utils';

declare global {
    interface Window {
        addCampaigns: (campaign: CampaignType[]) => void;
    }
}

export const Home = () => {
    const [test, setTest] = useState(false)
    const [campaigns, setCampaigns] = useRecoilState(campaignsState);

    useEffect(() => {
        const addCampaigns = (campaigns: CampaignType[]) => {
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

            setCampaigns((oldCampaigns) => [...oldCampaigns, ...cleanedCampaigns])

            console.log('Added campaigns', cleanedCampaigns)
        }

        window.addCampaigns = addCampaigns
    }, [])
    
    return (
        <div>
            <Table />
        </div>
    )
}