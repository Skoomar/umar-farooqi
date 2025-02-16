import { MediaLinkPanel } from '@/components/UtilComponents';

const Footer = () => (
    <footer className="flex-shrink-0">
        <div className="shadow bg-secondary py-6 px-8">
            <MediaLinkPanel />
        </div>
        <div className="bg-background py-2 text-xs text-center">Designed & created by Umar Farooqi</div>
    </footer>
);

export default Footer;