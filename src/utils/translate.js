export async function translateText(text, targetLang) {
    // אם השפה שנבחרה היא עברית, נחזיר את הטקסט המקורי בלי לפנות לשרת
    if (targetLang === 'he') {
        return text;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=he|${targetLang}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.responseData.translatedText;
}