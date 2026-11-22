import { useEffect, useState } from "react";
import { useI18nContext } from "./context/I18nContext";
import { translateText } from "./utils/translate";

export function GreetingCard({ greeting }) {
    const { language } = useI18nContext();
    const [translatedGreeting, setTranslatedGreeting] = useState(greeting);

    useEffect(() => {
        translateText(greeting, language)
            .then((result) => setTranslatedGreeting(result));
    }, [greeting, language]);

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "8px 0", borderRadius: "6px" }}>
            {translatedGreeting}
        </div>
    );
}