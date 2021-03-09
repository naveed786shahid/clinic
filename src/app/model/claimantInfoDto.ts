import { AgencyDto } from './agencyDto';

export class ClaimantInfoDto{
    id: number;
    agencyId:  number;
    accidentDate: string;
    clinicListInstructions: string;
    homePhone:string;
    workPhone:string;
    agency: AgencyDto;
}