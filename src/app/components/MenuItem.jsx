import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "./Dropdown";

export const MenuItem = ({
    item,
    depthLevel,

}) => {
    const [dropdown, setDropdown] = useState(item && item.active);
    let ref = useRef();

    useEffect(() => {
        
        const appendQueryStringToHref = () => {
            if (item && item.url) {
                const currentUrl = window.location.href;
                const urlWithQueryString = new URL(item.url, currentUrl);
                const currentQueryString = new URLSearchParams(window.location.search);
                currentQueryString.forEach((value, key) => {
                    urlWithQueryString.searchParams.append(key, value);
                });
                
                ref.current.querySelector('a').href = urlWithQueryString.href;
                console.log(urlWithQueryString.href)
            }
        };

        appendQueryStringToHref();
    }, [item]);

    const onClick = (item) => {
        let ul = ref.current.querySelector('ul');
    
        
        const isShowClassPresent = ul.classList.contains('show');
    
        if (isShowClassPresent) {
            
            ul.classList.remove('show');
        } else {
            
            ul.classList.add('show');
        }
    
    };
    

    return (
        <li
            className="menu-items hover:bg-gray-700"
            ref={ref}

        >
            {item && item.submenu ? (
                <>
                    <button
                        className={item.active ? "activeItem" : ""}
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={item.active ? "true" : "false"}
                        onClick={() => onClick(item)}
                    >
                        {item.title} {depthLevel > 0 ? <span>»</span> : <span className="arrow"></span>}
                    </button>
                    <Dropdown

                        submenus={item.submenu}
                        isActive={item.active}
                        depthLevel={depthLevel}

                    />
                </>
            ) : (
                <a href={item && item.url} className={item && item.active ? "activeItem" : ""} >{item && item.title}</a>
            )}
        </li>
    );
};