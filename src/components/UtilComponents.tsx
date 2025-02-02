import { JSX } from 'react';
import { Separator } from '@/components/ui/separator';

export const Subsection = ({ children }: { children: JSX.Element }) => <div className="mb-5">{children}</div>;
export const HeadingUnderline = () => <Separator className="mt-0.5 mb-2" />;