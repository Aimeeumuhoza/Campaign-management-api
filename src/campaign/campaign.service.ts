// src/campaign/campaign.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './schemas/campaign.schema';
import { CreateCampaignDto } from './dto/create-campaign.dto';


@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
  ) {}

  async createCampaign(createCampaignDto: CreateCampaignDto) {
    const campaignData = {
      name: createCampaignDto.name,
      description: createCampaignDto.description,
      instructions: createCampaignDto.instructions,
      deadline: createCampaignDto.deadline,
      submissions: [],
    };
    
    const campaign = new this.campaignModel(campaignData);
    return campaign.save();
  }

  async getAllCampaigns() {
    return this.campaignModel.find().sort({ createdAt: -1 }); 
  }

  async getCampaignById(campaignId: string) {
    const campaign = await this.campaignModel.findById(campaignId);
 
    return campaign;
  }
  

  async getCampaignsByInfluencer(influencerId: string) {
    return this.campaignModel.find({ 
      'submissions.influencerId': influencerId,
      'submissions.status': 'approved',
     });
  }

  async submitCampaignContent(campaignId: string, influencerId: string, url: string) {
    return this.campaignModel.updateOne(
      { _id: campaignId },
      { $push: { submissions: {campaignId:campaignId, influencerId, url, status: 'pending' } } },
    );
  }

  async approveOrRejectSubmission(
    campaignId: string,
    influencerId: string,
    status: 'approved' | 'rejected',
  ) {
    return this.campaignModel.updateOne(
      { _id: campaignId, 'submissions.influencerId': influencerId },
      { $set: { 'submissions.$.status': status } },
    );
  }

  async getInfluencersAndStatusForCampaign(campaignId: string) {
    const campaign = await this.campaignModel.findById(campaignId).select('submissions name');
    
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    // Extracting influencer details along with submission status
    const influencersWithStatus = campaign.submissions.map(submission => ({
      influencerId: submission.influencerId,
      url: submission.url,
      status: submission.status,
    }));
    
    return {
      campaignName: campaign.name,
      influencers: influencersWithStatus,
    };
  }
}
