export interface AnnouncementModel {
    id: string;
    subject: string;
    body: string;
    attachments: string[];
    dateCreated: Date;
    dateToPublish: Date | null;
    datePublished: Date | null;
    status: "published" | "pending" | "discarded";
    remark: string;
}