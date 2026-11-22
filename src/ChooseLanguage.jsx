import { useI18nContext } from "./context/I18nContext";

export function ChooseLanguage() {
    // חילוץ של פונקציית השינוי בלבד בעזרת destructuring
    const { changeLanguage } = useI18nContext();

    return (
        <div>
            <label htmlFor="lang-select">בחרי שפה: </label>
            <select
                id="lang-select"
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value="he">עברית</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </div>
    );
}