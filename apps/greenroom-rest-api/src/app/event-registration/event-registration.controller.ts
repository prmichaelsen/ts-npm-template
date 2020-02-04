import { Controller, Post, Body } from '@nestjs/common';
import { CalendarEventService } from '../events/events.service';
import { EventRegistrationDto } from '@parm/greenroom-dto';

@Controller('v1/event-registration')
export class EventRegistrationController {
  constructor(private readonly eventService: CalendarEventService) {}

  @Post()
  async create(@Body() dto: EventRegistrationDto) {
    return await this.eventService.register(dto);
  }

}
