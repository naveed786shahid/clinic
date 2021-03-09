import { Venue } from './venue';
import { SlotDto } from './slotDto';
import { VenueClinicDto } from './venueClinicDto';
import { ExpertDto } from 'src/app/model/exportDto';

export class ClinicDetailDto{
  slots: SlotDto[];
  clinic:VenueClinicDto;
  expert:ExpertDto;
  totalSlots: number;
  bookedSlots:  number;
}
    
