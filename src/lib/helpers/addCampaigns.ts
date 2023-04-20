import { allExpressionsTrue } from "../utils";

export type CampaignType = {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    Budget: number;
}

function isACampaign(obj: any): obj is CampaignType {
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
        console.warn('Inputted campaign is in the wrong format, make sure the types are correct.', obj);
    }

    return validation;
}

export const addCampaigns = (campaigns: CampaignType[]) => {
    if (!Array.isArray(campaigns)) {
        throw new Error('Campaigns must be an array!');
    }

    if (!campaigns.length) {
        throw new Error('Please provide at least one campaign!');
    }

    const cleanedCampaigns = campaigns.filter((campaign) => isACampaign(campaign));
    console.log('campaigns', cleanedCampaigns);
}