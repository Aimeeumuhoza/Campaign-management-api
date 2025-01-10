// src/auth/auth.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string; role: string }) {
    return this.authService.signup(body.email, body.password, body.role);
  }

  @Post('signin')
  async signin(@Body() body: { email: string; password: string }) {
    return this.authService.signin(body.email, body.password);
  }

  @Get('getAllInfluencers')
  async getAllInfluencers() {
    return this.authService.getAllInfluencers();
  }
}