
import { createContext, useContext, useState, useEffect } from "react";
import {
  bodyColorKeywords, headerColorKeywords, bodyFontFamilyKeywords,
  footerColorKeywords, persistChangesKeywords, createVariationKeywords,
  headerFontColorKeywords
} from "@/app/components/Keywords";
import data from '@/store/data.json'
import { persistChanges, getRecord } from '@/app/actions/serverActions'


const TextContext = createContext("");

export const TextProvider = ({ children }) => {
  const [text, setText] = useState("");

  const [bodyColor, setBodyColor] = useState("");
  const [headerColor, setHeaderColor] = useState("");
  const [headerFontColor, setHeaderFontColor] = useState("");
  const [footerColor, setFooterColor] = useState("");
  const [bodyFontFamily, setBodyFontFamily] = useState("arial")

  const getValue = (text) => {

    const words = text.toLowerCase().split(' ');
    const pageIndex = words.indexOf('to') || words.indexOf('2');
    if (pageIndex > 0) {

      const remainingWords = words.slice(pageIndex + 1);
      const sanitizedWords = remainingWords.filter(word => word.trim());
      let value = sanitizedWords.join('');
      if (value === 'Ariel' || value === 'ariel') {
        value = 'Arial'
      }
      return value;
    }
    return null;
  }
  useEffect(() => {

    const fetchData = async () => {

      if (typeof window !== 'undefined') {

        const urlSearchParams = new URLSearchParams(window.location.search);

        if (urlSearchParams.get('vid')) {
          const vid = urlSearchParams.get('vid');

          try {
            const record = await getRecord(vid);

            if (record) {
              setBodyColor(record.bodyColor)
              setHeaderColor(record.headerColor)
              setHeaderFontColor(record.headerFontColor)
              setFooterColor(record.footerColor)
              setBodyFontFamily(record.bodyFontFamily)
            } else {

              setBodyColor(data.default.bodyColor)
              setHeaderColor(data.default.headerColor)
              setHeaderFontColor(data.default.headerFontColor)
              setFooterColor(data.default.footerColor)
              setBodyFontFamily(data.default.bodyFontFamily)
            }

          } catch (error) {
            console.error('Error fetching record:', error);
          }
        } else {

          setBodyColor(data.default.bodyColor)
          setHeaderColor(data.default.headerColor)
          setHeaderFontColor(data.default.headerFontColor)
          setFooterColor(data.default.footerColor)
          setBodyFontFamily(data.default.bodyFontFamily)

        }
      }
    };

    fetchData();

  }, [getRecord]);



  useEffect(() => {

    const changeValues = () => {

      if (!text) return;

      if (bodyColorKeywords.some(bodyColorKeywords => text.toLowerCase().includes(bodyColorKeywords))) {
        {
          const color = getValue(text)
          if (color) {
            setBodyColor(color)
          }
        }

      };

      if (headerColorKeywords.some(headerColorKeywords => text.toLowerCase().includes(headerColorKeywords))) {
        {
          const color = getValue(text)
          if (color) {
            setHeaderColor(color)
          }
        }

      };

      if (headerFontColorKeywords.some(headerFontColorKeywords => text.toLowerCase().includes(headerFontColorKeywords))) {
        {
          const color = getValue(text)
          if (color) {
            setHeaderFontColor(color)
          }
        }

      };

      if (footerColorKeywords.some(footerColorKeywords => text.toLowerCase().includes(footerColorKeywords))) {
        {
          const color = getValue(text)
          if (color) {
            setFooterColor(color)
          }
        }

      };

      if (bodyFontFamilyKeywords.some(bodyFontFamilyKeywords => text.toLowerCase().includes(bodyFontFamilyKeywords))) {
        {
          const font = getValue(text)
          if (font) {
            setBodyFontFamily(font)
          }
        }

      };


      if (persistChangesKeywords.some(persistChangesKeywords => text.toLowerCase().includes(persistChangesKeywords))) {

        let newData = {
          headerColor: headerColor,
          bodyColor: bodyColor,
          footerColor: footerColor,
          bodyFontFamily:bodyFontFamily,
          headerFontColor:headerFontColor
        }

        const res = persistChanges("default", newData)

        if (res) {
          alert("your changes have been saved!")
        }

      };

      if (createVariationKeywords.some(createVariationKeywords => text.toLowerCase().includes(createVariationKeywords))) {

        let newData = {
          headerColor: headerColor,
          bodyColor: bodyColor,
          footerColor: footerColor,
          bodyFontFamily:bodyFontFamily,
          headerFontColor:headerFontColor
        }

        let r = (Math.random() + 1).toString(36).substring(7);

        const res = persistChanges(r, newData)
        
        if (res) {

          const currentUrl = window.location.origin + window.location.pathname;
          const url = currentUrl + '?vid=' + r;
          
          // Attach an event listener to an element that the user can click
          //document.getElementById('yourButtonId').addEventListener('click', function() {
          // Open the URL in a new tab
          const newWindow = window.open(url, '_blank');
          
          if (newWindow) {
          // Focus on the new tab
          newWindow.focus();
          } else {
          // Log an error if the window didn't open
          console.error('Error opening URL');
          }
          //});

        }

      };



    }
    changeValues();

  }, [text]);




  return (
    <TextContext.Provider value={{ text, setText, bodyColor, headerColor, footerColor, bodyFontFamily, headerFontColor }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => {

  const { text, setText, bodyColor, headerColor, footerColor, bodyFontFamily, headerFontColor } = useContext(TextContext);
  return { text, setText, bodyColor, headerColor, footerColor, bodyFontFamily, headerFontColor };

};
