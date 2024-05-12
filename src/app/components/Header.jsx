import React from 'react';
import { Navbar } from './Navbar';
import { useEffect, useRef, useState } from 'react'
import { useText } from "@/hooks/useText";

export const Header = () => {
    const { text, headerColor } = useText();
    const sectionRef = useRef(null);

   useEffect(() => {
    
        const updateActiveSection = () => {

            if (!text) return;

            if (text.toLowerCase().includes("section")) {

                const words = text.toLowerCase().split(' ');
                const sectionIndex = words.indexOf('section'); 

                if (sectionIndex > 0) {
                    const searchWord = words[sectionIndex - 1];
                    const sectionId = `${searchWord}`;
                    const sectionElement = document.getElementById(sectionId);
                    if (sectionElement) {
                        sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                }

            }

        };

        const goToPage = () => {

            if (!text) return;

            if (text.toLowerCase().includes("page") || text.toLowerCase().includes("homepage")) {

                const words = text.toLowerCase().split(' ');
                let pageIndex = words.indexOf('page') ; 

                if (pageIndex === -1){
                    pageIndex = words.indexOf('homepage') + 1;
                }

                console.log('pageIndex',pageIndex)
                
                if (pageIndex > 0) {
                    const searchWord = words[pageIndex - 1];
                    const pageId = `${searchWord}`;
                    console.log('search words', searchWord);
                   // const pageElement = document.getElementById(pageId);
                    if (pageId) {
                        window.location.href = `${searchWord}`;
                    }
                }

            }

        };

        goToPage();
        updateActiveSection();

    }, [text]);

    return (

        <header className="bg-gray-800 text-white pt-2 pb-2" style={{backgroundColor: headerColor }}>
            <div className="container   pl-2 pr-2 md:pl-[3.4rem]">
              <Navbar></Navbar>
            </div>
        </header>
    );
};

