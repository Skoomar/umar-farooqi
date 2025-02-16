import { HeadingUnderline, StyledExternalLink } from '@/components/UtilComponents';

const ContactMe = () => (
    <section className="py-8 px-8 md:px-[10%] shadow">
        <h2 className="text-2xl font-semibold max-lg:text-center">Contact Me</h2>
        <HeadingUnderline />
        <div className="flex flex-col gap-2">
            <p className="mt-4"><b>Email:</b> umar_farooqi@hotmail.co.uk</p>
            {/*<p>I&#39;m open to freelance work - don&#39;t hesitate to get in touch!</p>*/}
            <StyledExternalLink href="https://www.linkedin.com/in/umar-farooqi-09279a184">Linkedin
                Profile</StyledExternalLink>
            <StyledExternalLink href="https://github.com/Skoomar">GitHub Profile</StyledExternalLink>
        </div>
    </section>
);

export default ContactMe;