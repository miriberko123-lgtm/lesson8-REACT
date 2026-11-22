import { useEffect, useState } from "react";
import { useI18nContext } from "./context/I18nContext";
import { translateText } from "./utils/translate";

export function BirthDate({ birthDate }) {
    const { language } = useI18nContext();
    const [translatedMessage, setTranslatedMessage] = useState("");

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthDate.getFullYear();
    const formattedDate = birthDate.toLocaleDateString(language);

    useEffect(() => {
        const originalMessage = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא: ${formattedDate}.`;

        translateText(originalMessage, language)
            .then((result) => setTranslatedMessage(result));
    }, [language, age, formattedDate]);

    return (
        <div>
            <p>{translatedMessage}</p>
        </div>
    );
}