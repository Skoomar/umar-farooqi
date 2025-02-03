'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { LuMenu } from 'react-icons/lu';
import Link from 'next/link';
import { useState } from 'react';

const MobileSidebar = ({ links }: { links: { href: string, label: string }[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-foreground shadow lg:hidden">
                    <LuMenu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-shadow" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" aria-describedby="Navigation Menu">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Select a page</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-5">
                    {
                        links.map((link) => (
                            <Link key={link.label.toLowerCase()} href={link.href}
                                  className="text-lg" onClick={() => setOpen(false)}>{link.label}</Link>)
                        )
                    }
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;