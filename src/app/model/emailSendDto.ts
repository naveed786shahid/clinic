import { AttachmentDto } from 'src/app/model/attachmentDto';

export class EmailSendDto{
    to :number;
    subject:string;
    body:string;
    attachments: AttachmentDto[];

 }