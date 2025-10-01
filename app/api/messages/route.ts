import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/Mongo";
import { MessageI, Messages } from "@/models/Message.model";

export async function GET() {
    try {
        await connectToMongoDB();
        const messages = await Messages.find()
        return NextResponse.json({ messages }, { status: 200 })
    } catch {
        return NextResponse.json(
            { error: "Failed to fetch messages" },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectToMongoDB();

        const formInput: MessageI = await req.json();

        console.log(formInput)
        await Messages.create(formInput)

        return NextResponse.json(
            { message: "Message saved successfully." },
            { status: 201 }
        );
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error: "Failed to insert message" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        await connectToMongoDB();

        const { searchParams } = new URL(req.url);
        const messageId = searchParams.get("id");

        if (!messageId) {
            return NextResponse.json(
                { error: "Missing message ID" },
                { status: 400 }
            );
        }

        const messageUpdateData: Partial<MessageI> = await req.json();
        const updatedMessage = await Messages.findByIdAndUpdate(messageId, messageUpdateData, { new: true })

        if (!updatedMessage) {
            return NextResponse.json(
                { error: "Message not found!" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Message updated successfully." },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to update message" },
            { status: 500 }
        );
    }
}