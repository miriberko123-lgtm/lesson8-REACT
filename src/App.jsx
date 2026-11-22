import { BirthDate } from "./BirthDate";
import { ChooseLanguage } from "./ChooseLanguage";
import { I18nContextProvider } from "./context/I18nContext";
import { GreetingsList } from "./GreetingsList";

function App() {
    // תאריך לדוגמה (שימי לב: ב-JS החודשים מתחילים מ-0, לכן 10 זה נובמבר)
    const sampleBirthDate = new Date(2015, 10, 20);

    // מערך ברכות לדוגמה
    const sampleGreetings = [
        "עד 120 שנה!",
        "המון בריאות, אושר והצלחה בכל!",
        "שיתגשמו כל משאלות ליבך לטובה!"
    ];

    return (
        <I18nContextProvider>
            <ChooseLanguage />
            <hr />
            <BirthDate birthDate={sampleBirthDate} />
            <GreetingsList greetings={sampleGreetings} />
        </I18nContextProvider>
    );
}

export default App;