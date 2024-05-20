// src/app.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get('csrf-token')
  getCsrfToken(@Req() req: Request) {
    return { csrfToken: (req as any).csrfToken() };
  }
}
