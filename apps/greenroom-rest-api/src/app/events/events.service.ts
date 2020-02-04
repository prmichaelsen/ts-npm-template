import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event, EventRegistration } from '@parm/greenroom-interface';

@Injectable()
export class CalendarEventService {
  constructor(@InjectModel(Event) private readonly model: Model<Event>) {}

  async create(dto: Event): Promise<Event> {
    const entity = new this.model(dto);
    return entity.save();
  }

  async register(dto: EventRegistration) {
    const { eventId } = dto;
    const event: Event = await this.model.findById(eventId).exec();
    console.log(event);
    // event.slots
    //   .filter(slot => slot.comics.length < 8)
    //   .
    //   ;
  
    const entity = new this.model(dto);
    // return event.save();
  }

  async getLatest(): Promise<Event> {
    return this.model.findOne().exec();
  }
}
