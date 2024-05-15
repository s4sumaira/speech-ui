import { MenuItem } from "./MenuItem";
import { MenuData } from "@/app/resources/MenuData";
import { useEffect, useState } from 'react'
import { useText } from "@/hooks/useText";

export const Navbar = () => {
    const { text } = useText();
    const [menuRecords, setMenuRecords] = useState(MenuData);

    useEffect(() => {
        const updateActiveMenu = () => {

            if (!text) return; // Don't proceed if text is empty

            // Split text into words

            if (text.toLowerCase().includes("menu")) {

                const words = text.toLowerCase().split(' ');
                const menuIndex = words.indexOf('menu'); // Find index of "menu" in words array

                if (menuIndex > 0) {
                    const searchWord = words[menuIndex - 1];
                    const menuItem = searchMenuItemByTitle(MenuData, searchWord);
                    if (menuItem) {
                        // Set the active value of the found menu item to true
                        const updatedMenuData = setActiveMenuItems(MenuData, menuItem.id);
                        setMenuRecords(updatedMenuData);
                    }
                }

            }

        };
       
        updateActiveMenu();
     
    }, [text]); // Run this effect whenever the text changes

    // Function to search for a menu item by its title
    const searchMenuItemByTitle = (menuData, title) => {
        for (const menuItem of menuData) {
            if (menuItem.title.toLowerCase() === title.toLowerCase()) {
                return menuItem;
            }
            if (menuItem.submenu) {
                const found = searchMenuItemByTitle(menuItem.submenu, title);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };

    // Function to set the active value of menu items based on their IDs
    const setActiveMenuItems = (menuData, id) => {
        let ids = id.split('.').reduce((acc, val, i) => {
            if (i === 0) {
                acc.push(val);
            } else {
                acc.push(acc[i - 1] + '.' + val);
            }
            return acc;
        }, []);

        const searchAndActivate = (items) => {
            return items.map(item => {
                const newItem = { ...item };
                if (ids.includes(newItem.id)) {
                    newItem.active = true;
                    if (newItem.submenu) {
                        newItem.submenu = searchAndActivate(newItem.submenu);
                    }
                } else if (newItem.submenu) {
                    newItem.submenu = searchAndActivate(newItem.submenu);
                }
                return newItem;
            });
        }

        return searchAndActivate(menuData);
    };

    return (
        <>
            <nav className="">
                <ul className="menus ">
                    {menuRecords && menuRecords.map((item) => {
                        const depthLevel = 0;
                        return <MenuItem
                            item={item}
                            key={item.id}
                            depthLevel={depthLevel}
                        />;
                    })}
                </ul>
            </nav>
        </>
    );
};
