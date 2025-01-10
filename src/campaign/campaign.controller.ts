// src/campaign/campaign.controller.ts
import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) { }

  @Post("create")
  createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.createCampaign(createCampaignDto);
  }

  @Get("all")
  getAllCampaigns() {
    return this.campaignService.getAllCampaigns();
  }

  @Get(':id')
  async getCampaignById(@Param('id') id: string) {
    return this.campaignService.getCampaignById(id);
  }

  @Get('influ/:influencerId')
  async getCampaignsByInfluencer(@Param('influencerId') influencerId: string) {
    return this.campaignService.getCampaignsByInfluencer(influencerId);
  }

  @Post('submit/:campaignId')
  submitCampaignContent(
    @Param('campaignId') campaignId: string,
    @Body() body: { influencerId: string; url: string },
  ) {
    return this.campaignService.submitCampaignContent(campaignId, body.influencerId, body.url);
  }

  @Patch('submission/:campaignId')
  approveOrRejectSubmission(
    @Param('campaignId') campaignId: string,
    @Body() body: { influencerId: string; status: 'approved' | 'rejected' },
  ) {
    return this.campaignService.approveOrRejectSubmission(campaignId, body.influencerId, body.status);
  }

  @Get('influencers/status/:campaignId')
  async getInfluencersAndStatus(@Param('campaignId') campaignId: string) {
    return this.campaignService.getInfluencersAndStatusForCampaign(campaignId);
  }
  
}
