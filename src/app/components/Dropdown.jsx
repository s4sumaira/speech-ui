import React,{useEffect} from "react";
import { MenuItem } from "./MenuItem";

export const Dropdown = ({
    submenus,   
    isActive,
    depthLevel,
    
     }) => {

    
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`bg-gray-800 dropdown ${dropdownClass} ${isActive ? "show" : ""}`}>
            {submenus.map((item) => (
                <MenuItem item={item}
                    key={item.id}
                    depthLevel={depthLevel}
                />
            ))}
        </ul>
    );
};
