// ContactForm.tsx
import { Card, CardContent } from "@/components/ui/card";
import { H3, P } from "@/components/ui/typography";
import ContactButton from "@/utils/contact/ContactButton";
import ContactInput from "@/utils/contact/ContactInput";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);


        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                { name, email, message },
                PUBLIC_KEY,
            );

            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent successfully");
        } catch (err) {
            console.error(err);

            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="bg-[var(--tag-color)]/70 border border-[var(--shadow-color)]/50 shadow-lg rounded-xl">
            <CardContent className="p-6 space-y-6">
                <H3 className="text-lg font-semibold text-white">
                    Send Me a Message
                </H3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <ContactInput
                        label="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Ken"
                    />
                    <ContactInput
                        label="Your Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johnk@example.com"
                    />
                    <ContactInput
                        label="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your ideas..."
                        isTextarea
                        maxLength={250}
                    />
                    <P className="text-[var(--text-color)] text-right">
                        {message.length}/250
                    </P>

                    <ContactButton loading={loading}>
                        Let's Connect
                    </ContactButton>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
