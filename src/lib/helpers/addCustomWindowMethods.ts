import { CampaignType, addCampaigns } from './addCampaigns'

declare global {
    interface Window {
        addCampaigns: (args: CampaignType[]) => void;
    }
}

export const addCustomWindowMethods = () => {
	window.addCampaigns = addCampaigns
}