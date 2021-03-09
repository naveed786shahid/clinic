import { CaseDto } from './caseDto';

export class SlotDto{
    id: number;
    time: string;
    date: string;
    case:CaseDto;
}