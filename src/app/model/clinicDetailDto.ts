import { Venue } from './venue';
import { SlotDto } from './slotDto';
import { VenueClinicDto } from './venueClinicDto';

export class ClinicDetailDto{
  slots: SlotDto[];
  clinic:VenueClinicDto;
  totalSlots: number;
  bookedSlots:  number;
}
    
