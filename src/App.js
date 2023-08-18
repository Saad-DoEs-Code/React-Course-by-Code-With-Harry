import Navbar from './Components/Navbar.js'
import { TextArea } from './Components/TextArea.js';
import './App.css';
import { useState } from 'react';
// import { AccordionDarkMode } from './Components/AccordionDarkMode.js';
// import { Form } from './Components/Form.js';


// Main Starting Point of the App



function App() {

  // Setting Dark Mode for Website, using toggle button
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.background="#393646";
    }
    else {
      setTheme('light')
      document.body.style.background="white";
      
    }
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <TextArea heading="Enter Text Below to Analyze" theme={theme} />
      </div>
      {/* <AccordionDarkMode/> */}
      <br />
      {/* <Form/> */}
    </>
  );
}

export default App;
