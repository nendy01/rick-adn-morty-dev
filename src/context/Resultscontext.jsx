import { createContext, useState } from "react";

const ResultsContext = createContext();

const ResultsProvider = ({ children}) => {

  const [result, setResult] = useState({activePage:1});

  return <ResultsContext.Provider value={{result,setResult}}>{children}</ResultsContext.Provider>;
}

export {ResultsContext};

export default ResultsProvider;