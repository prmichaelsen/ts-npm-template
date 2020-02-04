import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventDto } from '@parm/greenroom-dto';
import { CalendarEventService } from './events.service';

@Controller('v1/events')
export class EventsController {
  constructor(private readonly eventService: CalendarEventService) {}

  @Get('latest')
  async getLatest() {
    return await this.eventService.getLatest();
  }

  @Get()
  async get() {
    return await this.eventService.getLatest();
  }

  @Get('by-id/:id')
  async getById() {
    return await this.eventService.getLatest();
  }

  @Post()
  async create(@Body() dto: EventDto) {
    return await this.eventService.create(dto);
  }
}
