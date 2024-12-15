//next part
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const translatedTextElement = document.getElementById("translated-text");
const sourceLanguageSelect = document.getElementById("source-language-select");
const targetLanguageSelect = document.getElementById("target-language-select");

let recognition = new webkitSpeechRecognition();

startButton.addEventListener("click", () => {
    recognition.lang = sourceLanguageSelect.value;
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
    recognition.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;

    // Use a translation API (e.g., Google Translate) to translate the text
    // Replace 'your_api_key' with your actual API key
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguageSelect.value}&tl=${targetLanguageSelect.value}&dt=t&q=${encodeURIComponent(transcript)}&key=your_api_key`)
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0][0][0];
            translatedTextElement.textContent = translatedText;

            // Speak the translated text
            const utterance = new SpeechSynthesisUtterance(translatedText);
            utterance.lang = targetLanguageSelect.value;
            speechSynthesis.speak(utterance);
        })
        .catch(error => {
            console.error("Translation error:", error);
        });
};

recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};
//first part
const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-button");
const translatedTextElement1 = document.getElementById("translated-text1");
const sourceLanguageSelect1 = document.getElementById("source-language-select1");
const targetLanguageSelect1 = document.getElementById("target-language-select1");

const languages = {
    "hi-IN": "Hindi",
    "en-IN": "English",
    "bn-IN": "Bengali",
    "te-IN": "Telugu",
    "ta-IN": "Tamil",
    "mr-IN": "Marathi",
    "gu-IN": "Gujrati",
    "kn-IN": "Kannada",
    "ml-IN": "Malayalam",
    "or-IN": "Odiya",
    "pa-IN": "Panjabi",
    "as-IN": "Assamese",
    "ur-IN": "Urdu",
    // Add more languages as needed
};

const speechSynthesis = window.speechSynthesis;
const voices = speechSynthesis.getVoices();

const recognition1 = new webkitSpeechRecognition();

speakButton.addEventListener("click", () => {
    const text = textInput.value;
    const sourceLanguage = sourceLanguageSelect1.value;
    const targetLanguage = targetLanguageSelect1.value;

    // Use a translation API (e.g., Google Translate) to translate the text
    // Replace 'your_api_key' with your actual API key
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}&key=your_api_key`)
        .then(response => response.json())
        .then(data => {
            const TranslatedText = data[0][0][0];
            translatedTextElement1.textContent = TranslatedText;

            // Speak the translated text
            const utterance1 = new SpeechSynthesisUtterance(TranslatedText);
            utterance1.lang = targetLanguage;
            speechSynthesis.speak(utterance1);
        })
        .catch(error => {
            console.error("Translation error:", error);
        });
});

listenButton.addEventListener("click", () => {
    const TranslatedText = translatedTextElement1.textContent;
    const targetLanguage = targetLanguageSelect1.value;

    // Speak the translated text
    const utterance1 = new SpeechSynthesisUtterance(TranslatedText);
    utterance1.lang = targetLanguage;
    speechSynthesis.speak(utterance1);
});

recognition1.onresult = (event) => {
    const transcript1 = event.results[0][0].transcript1;
    textInput.value = transcript1;

    // Use a translation API (e.g., Google Translate) to translate the text
    // Replace 'your_api_key' with your actual API key
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguageSelect1.value}&tl=${targetLanguageSelect1.value}&dt=t&q=${encodeURIComponent(transcript1)}&key=your_api_key`)
        .then(response => response.json())
        .then(data => {
            const TranslatedText = data[0][0][0];
            translatedTextElement1.textContent = TranslatedText;

            // Speak the translated text
            const utterance1 = new SpeechSynthesisUtterance(TranslatedText);
            utterance1.lang = targetLanguageSelect1.value;
            speechSynthesis.speak(utterance1);
        })
        .catch(error => {
            console.error("Translation error:", error);
        });
};

recognition1.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
};

// Add event listeners for voice input
document.getElementById("start-button").addEventListener("click", () => {
    recognition1.start();
});

document.getElementById("stop-button").addEventListener("click", () => {
    recognition1.stop();
});