import { ContactUsReply } from '@/components/EmailTemplates/ContactUsReply';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactUsRequest = {
    email: string;
    firstName: string;
    lastName: string;
};

export async function POST(req: Request) {
    try {
        const body: ContactUsRequest = await req.json();
        const { email, firstName, lastName } = body;
        const { data, error } = await resend.emails.send({
            from: 'LDSolutionsPH <sales@ldsolutionsph.com>',
            to: [email],
            subject: "Thank You for Contacting LDSolutionsPH ☕",
            react: ContactUsReply({ firstName, lastName }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
