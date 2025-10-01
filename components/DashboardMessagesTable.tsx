import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { MessageI } from "@/models/Message.model"

export async function DashboardMessagesTable() {

    // const res = await fetch(`${process.env.STG_URL}/api/messages`, {
    //     cache: "no-store",
    // });

    const res = await fetch(`${process.env.DEV_URL}/api/messages`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch messages");
    }

    const fetchData = await res.json();
    const messages: MessageI[] = fetchData.messages

    return (
        <div className="pr-7">
            <h1 className="font-semibold text-xl">Messages</h1>
            <p className="text-sm font-light text-muted-foreground">Manage your client&apos;s messages.</p>

            <div className="rounded-lg border overflow-hidden mt-5">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[15%]">Client Name</TableHead>
                            <TableHead className="w-[15%]">Email</TableHead>
                            <TableHead>Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages?.map((message, index: number) => (
                            <ContextMenu key={index}>
                                <ContextMenuTrigger asChild>
                                    <TableRow className="cursor-pointer">
                                        <TableCell className="font-medium">{message.clientFirstName + " " + message.clientLastName}</TableCell>
                                        <TableCell>{message.clientEmail}</TableCell>
                                        <TableCell>{message.clientMessage}</TableCell>
                                    </TableRow>
                                </ContextMenuTrigger>
                                <ContextMenuContent>
                                    <ContextMenuItem className="cursor-pointer">Reply</ContextMenuItem>
                                    <ContextMenuItem className="cursor-pointer">Archive</ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
