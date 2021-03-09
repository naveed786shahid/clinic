import { ClaimantInfoDto } from './claimantInfoDto';

export class CaseDto{
    id:number;
    title: string;
    firstName: string;
    lastName: string;
    mobile: string;
    claimantInfo:ClaimantInfoDto;
}