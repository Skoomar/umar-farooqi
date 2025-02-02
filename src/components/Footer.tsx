import Link from 'next/link';
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';

const Footer = () => (
    <div className="bg-secondary py-6 px-8 flex flex-row justify-between">
        <Link href="mailto:umar_farooqi@hotmail.co.uk"><LuMail size={30} /></Link>
        <Link
            href="https://www.linkedin.com/in/umar-farooqi-09279a184?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzuzGYgYEQQGU1pLjfJTt4w%3D%3D"><LuLinkedin
            size={30} /></Link>
        <Link href="https://github.com/Skoomar"><LuGithub size={30} /></Link>
    </div>
);

export default Footer;