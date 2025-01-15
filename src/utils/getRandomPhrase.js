import { motivationalPhrasesEnglish } from "@/constants/motivationalPhrasesEnglish";
import { motivationalPhrasesSpanish } from "@/constants/motivationalPhrasesSpanish";

export function getRandomPhrase(language = "es") {
  const phrases =
    language === "es" ? motivationalPhrasesSpanish : motivationalPhrasesEnglish;
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}
