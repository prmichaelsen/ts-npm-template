import { 
  IsNotEmpty,
  IsString,
  Equals,
  IsHexadecimal,
} from 'class-validator';
import { EventRegistration } from '@parm/greenroom-interface';

export class EventRegistrationDto implements EventRegistration {
  @IsString()
  @IsNotEmpty()
  @IsHexadecimal()
  eventId: string;

  @Equals(EventRegistration)
  @IsString()
  _type: 'event-registration';

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}