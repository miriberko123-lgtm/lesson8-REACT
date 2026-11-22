import { createContext, use, useState } from "react";

const I18nContext = createContext({
    language: '',
    changeLanguage(newLang) { }
});

export function I18nContextProvider({ children }) {
    const [language, setLanguage] = useState('he'); // ברירת מחדל: עברית (אפשר גם 'en' או 'fr')

    const changeLanguage = (newLang) => {
        setLanguage(newLang);
    };

    const val = {
        language,
        changeLanguage
    };

    return (
        <I18nContext value={val}>
            {children}
        </I18nContext>
    );
}

export function useI18nContext() {
    return use(I18nContext);
}