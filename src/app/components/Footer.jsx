import React,{useEffect, useState} from 'react';
import { Microphone } from './Microphone';
import { useText } from "@/hooks/useText";

export const Footer = () => {
    const {footerColor} = useText()
    const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState();


    useEffect(() => {
        
        if (typeof window !== 'undefined') {
            const urlSearchParams = new URLSearchParams(window.location.search);
            setIsMicrophoneEnabled(urlSearchParams.get('devmode') === 'true');
        }
    }, []);


    return (
        <footer className="fixed bottom-[5.75rem] md:bottom-0 z-50 bg-gray-800 text-white pt-2 pb-2 w-full right-0 left-0"
        style={{backgroundColor: footerColor, minHeight:'40px' }}>
            <div className="container mx-auto">
                <div className='text-center'>
                    {isMicrophoneEnabled && <Microphone />}
                    {!isMicrophoneEnabled && <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p> }
                </div>
               
                {/* Add footer links or other content here */}
            </div>
        </footer>
    );
};

