// src/campaign/schemas/campaign.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  instructions: string;

  @Prop({ required: true })
  deadline: string;

  @Prop({
    type: [{
      influencerId: { type: String },
      url: { type: String },
      status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    }],
  })
  submissions: { influencerId: string; url: string; status: string, campaignId:string }[];

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);