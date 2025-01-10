import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignModule } from './campaign/campaign.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://umuhoza:umuhoza@cluster0.lq8fbsl.mongodb.net/campainer?'),
    CampaignModule,
    AuthModule,
  ],
})
export class AppModule {}