'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo = () => {
    const [fill, setFill] = useState('#000');
    const { theme } = useTheme();

    useEffect(() => {
        setFill(theme === 'dark' ? '#fff' : '#000');
    }, [theme]);

    return (
        <svg width="50" height="36" viewBox="0 0 196 140" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_66_2)">
                <path
                    d="M78.592 102.168C72.704 109.08 63.744 112.536 51.712 112.536C39.68 112.536 30.6773 109.037 24.704 102.04C18.816 95.0427 15.872 85.4853 15.872 73.368V19.48H22.016V73.368C22.016 95.896 31.872 107.16 51.584 107.16C71.3813 107.16 81.28 95.896 81.28 73.368V19.48H87.424V73.368C87.424 85.5707 84.48 95.1707 78.592 102.168Z"
                    fill={fill} />
                <path
                    d="M143.296 19.48V22.296L89.408 105.624H144.32V111H80.448V108.056L134.336 24.856H83.776V19.48H143.296Z"
                    fill={fill} />
                <path d="M141.896 111V19.48H188.616V24.856H148.04V58.52H185.16V63.768H148.04V111H141.896Z"
                      fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_66_2">
                    <rect width="196" height="140" fill="#f2f2f2" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Logo;