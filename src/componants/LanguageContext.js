import { createContext } from "react";
export const languages = ["Javascript", "Python"];
const LanguageContext = createContext({
  languages,
  language: languages[0],
  setLanguage: () => {},
});
export default LanguageContext;
