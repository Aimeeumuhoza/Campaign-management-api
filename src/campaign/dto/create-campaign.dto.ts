// src/campaign/dto/create-campaign.dto.ts
export class CreateCampaignDto {
    name: string;
    description: string;
    instructions: string;
    deadline: string;
    influencerIds: string[];
  }