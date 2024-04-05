import { createContext } from "react";

const languages = ["javascript", "python"];
const LanguageContext = createContext({
  languages,
  language: languages[0],
  setLanguage: () => {},
});
export default LanguageContext;
