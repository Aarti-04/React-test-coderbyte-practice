import logo from "./logo.svg";
import "./App.css";
import Toggle from "./componants/Toggle";
import ColorSelector from "./componants/ColorSelector";
// import LanguageContext from "./componants/LanguageContext";
import { useState } from "react";
import { languages } from "./componants/LanguageContext";
import Language from "./componants/Language";
import LanguageContext from "./componants/UseContextLanguage";
import SelectLAnguage from "./componants/SelectLAnguage";
import { QuizApp } from "./componants/Quize";
import Quiz from "./componants/Quize1";
import Quize3 from "./componants/Quize3";
import Quize from "./componants/Quize3";
// import Quize2 from "./componants/Quize2";

function App() {
  const [language, setLanguage] = useState();
  return (
    // <LanguageContext.Provider value={{ languages, language, setLanguage }}>
    <LanguageContext.Provider value={{ language, languages, setLanguage }}>
      <div className="App">
        {/* <SelectLAnguage></SelectLAnguage> */}
        {/* <Language></Language> */}
        {/* <Toggle></Toggle> */}
        {/* <ColorSelector></ColorSelector> */}
        {/* <QuizApp></QuizApp> */}
        {/* <Quiz /> */}
        {/* <Quize2></Quize2> */}
        <Quize></Quize>
      </div>
      {/* </LanguageContext.Provider> */}
    </LanguageContext.Provider>
  );
}
// import React, { useState, createContext, useContext } from "react";
// import { createRoot } from "react-dom/client";

// const languages = ["JavaScript", "Python"];
// const LanguageContext = createContext({
//   languages,
//   language: languages[0],
//   setLanguage: () => {},
// });

// const MainSection = () => {
//   const { languages, language, setLanguage } = useContext(LanguageContext);
//   const currentIndex = languages.indexOf(language);
//   const toggleLanguage = () =>
//     currentIndex === languages.length - 1
//       ? setLanguage(languages[0])
//       : setLanguage(languages[currentIndex + 1]);

//   return (
//     <div>
//       <p id="favoriteLanguage">{`Favorite programming language: ${language}`}</p>
//       <button id="changeFavorite" onClick={toggleLanguage}>
//         Toggle language
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const [language, setLanguage] = useState(languages[0]);
//   return (
//     <LanguageContext.Provider value={{ languages, language, setLanguage }}>
//       <MainSection />
//     </LanguageContext.Provider>
//   );
// };

export default App;
