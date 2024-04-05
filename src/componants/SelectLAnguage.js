import React, { useContext } from "react";
import LanguageContext from "./UseContextLanguage";

const SelectLAnguage = () => {
  const { language, languages, setLanguage } = useContext(LanguageContext);
  const currentIndex = languages.indexOf(language);
  const languageHandler = () => {
    currentIndex == languages.length - 1
      ? setLanguage(languages[0])
      : setLanguage(languages[currentIndex + 1]);
  };
  return (
    <>
      <h2>Your favriout Language {language}</h2>
      <button onClick={languageHandler}>Choose Language</button>
    </>
  );
};

export default SelectLAnguage;
