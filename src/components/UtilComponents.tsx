import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

export const Subsection = ({ children }: { children: ReactNode }) => <div className="mb-5">{children}</div>;
export const HeadingUnderline = () => <Separator className="mt-0.5 mb-2" />;