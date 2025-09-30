interface EmailTemplateProps {
    firstName: string;
    lastName: string;
}

export function ContactUsReply({ firstName, lastName }: EmailTemplateProps) {
    return (
        <div>
            <p>
                Hi {firstName} {lastName},
            </p>

            <p style={{ margin: 0 }}>
                Thank you for reaching out to us! We&apos;ve received your message and our team
                will review it shortly. One of our representatives will get back to you
                within a day.
            </p>

            <p style={{ margin: 0 }}>
                In the meantime, if your matter is urgent, please don&apos;t hesitate to call us
                at <strong>+639 605 675 579</strong>.
            </p>

            <p style={{ margin: 0 }}>
                We appreciate you taking the time to contact us and look forward to
                assisting you.
            </p>

            <br />
            <br />
            <p style={{ fontWeight: "bold", margin: 0 }}>Best regards,</p>
            <p style={{ fontWeight: "normal", margin: 0 }}>Dranreb</p>
            <img
                src="https://ldsolutionsph.com/assets/ldlogo-dark.png"
                alt="Logo"
                width="50"
                height="50"
            />

            <p>
                <a href="https://ldsolutionsph.com" target="_blank" rel="noreferrer">
                    LDSolutionsPH.com
                </a>{" "}
                | +639 605 675 579
            </p>
        </div>
    );
}
