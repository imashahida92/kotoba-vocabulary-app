// Uses the browser's built-in SpeechSynthesis API to read a word aloud.
// lang defaults to Japanese; pass a different BCP-47 tag if you swap languages.
const useSpeak = (lang = 'ja-JP') => {
  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return speak;
};

export default useSpeak;
