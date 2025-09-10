// ContactInfo.tsx
import StaggeredAnimation from "@/components/Animation/StaggeredAnimation";
import { H3, H5, P } from "@/components/ui/typography";
import { ContactItem } from "@/utils/contact/ContactItem";
import { FaCalendar, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <section className="flex flex-col justify-center space-y-10">
            <H3>
                Contact{" "}
                <span className="text-[var(--color-accent)]">Information</span>
            </H3>

            <H5 className="font-bold leading-snug text-justify">
                You can reach out to me through the contact form or directly via
                email. I&apos;m open to discussing projects, creative ideas,
                hackathons, or opportunities to collaborate.
            </H5>

            <StaggeredAnimation
                className="space-y-6 text-gray-700"
                stagger={0.25}
                delayChildren={0.6}
            >
                <ContactItem icon={<FaEnvelope size={30} />} title="Email">
                    <P className="text-[var(--color-accent)]/99">
                        <a
                            href="mailto:olumideoluwuyi91@gmail.com"
                            className="hover:underline"
                            rel="noopener noreferrer"
                        >
                            olumideoluwuyi91@gmail.com
                        </a>
                    </P>
                </ContactItem>

                <ContactItem
                    icon={<FaCalendar size={30} />}
                    title="Availability"
                >
                    <P className="text-[var(--color-accent)]/99">
                        I&apos;m currently open and available for freelance,
                        hackathons, remote work, and full-time positions.
                    </P>
                </ContactItem>
            </StaggeredAnimation>
        </section>
    );
};

export default ContactInfo;
