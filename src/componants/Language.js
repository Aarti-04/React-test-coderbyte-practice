import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Language = () => {
  const { language, languages, setLanguage } = useContext(LanguageContext);
  let currentLanguageIndex = languages.indexOf(language);

  const languageToggle = () => {
    currentLanguageIndex == languages.length - 1
      ? setLanguage(languages[0])
      : setLanguage(languages[currentLanguageIndex + 1]);
  };
  return (
    <>
      <div>Your favriout language {language}</div>
      <button onClick={languageToggle}>Select Language</button>
    </>
  );
};

export default Language;
