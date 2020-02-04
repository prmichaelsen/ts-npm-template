import { Module } from '@nestjs/common';
import { EventRegistrationController } from './event-registration.controller';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    EventsModule
  ],
  controllers: [EventRegistrationController],
})
export class EventRegistrationModule {}
