import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';
import { MediaLink } from '@/components/UtilComponents';
import { Separator } from '@/components/ui/separator';

const Footer = () => (
    <footer>
        <div className="shadow bg-secondary py-6 px-8 flex flex-row justify-between sm:px-[25%]">
            <MediaLink href="mailto:umar_farooqi@hotmail.co.uk" Icon={LuMail} />
            <MediaLink
                href="https://www.linkedin.com/in/umar-farooqi-09279a184?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzuzGYgYEQQGU1pLjfJTt4w%3D%3D"
                Icon={LuLinkedin}
            />
            <MediaLink href="https://github.com/Skoomar" Icon={LuGithub} />
        </div>
        <Separator />
        <div className="bg-background py-2 text-xs text-center">Designed & created by Umar Farooqi</div>
    </footer>
);

export default Footer;