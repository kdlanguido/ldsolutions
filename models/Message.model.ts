import { model, models, Schema } from "mongoose";

export interface MessageI {
    clientEmail: string;
    clientFirstName: string;
    clientLastName: string;
    clientMessage: string;
    messageStatus: string;
}

const shape = {
    clientEmail: { type: String, required: true },
    clientFirstName: { type: String, required: true },
    clientLastName: { type: String, required: true },
    clientMessage: { type: String, required: true },
    messageStatus: { type: String, default: "unread" }
}

const schema = new Schema<MessageI>(shape)

export const Messages = models.Messages || model<MessageI>('Messages', schema)