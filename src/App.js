import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { ResultsContextProvider } from "./context/ResultsContextProvider"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <ResultsContextProvider> 
      <Router>
        <div className={darkTheme ? "dark" : ""}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes />
            <Footer />
          </div>
        </div>
      </Router>
    </ResultsContextProvider>
  );
}

export default App;
