// import React, { useContext } from 'react'
// import { ThemeContext } from './Themeprovider'
// import "./App.css"
// import Routing from './routes/Routing'
// import Footer from './components/Footer'


// const App = () => {

//   const { theme, toggleTheme } = useContext(ThemeContext)
//   console.log("theme=>", theme, toggleTheme);


//   return (
//     <div id='main' style={{
//       backgroundColor: theme === "Dark" ? "black" : "white",
//       color: theme === "light" ? "black" : "white",
      
//     }}>
//       <div id='main2'>
//         <Routing />
//       </div>
       

//       <div style={{
//         backgroundColor: theme === "Dark" ? "black" : "white",
//         color: theme === "light" ? "black" : "white",
//         height: "300px", margin: "100px auto", padding: "0px",
         
        
       

//       }}>
//         <h1 style={{
//           fontSize: "50px",
//           textAlign: "center",
//           backgroundColor: theme === "Dark" ? "black" : "white", color: theme === "Light" ? "black" : "white"

//         }}> Hi! <br />I'm Web Developer</h1>

//         <button onClick={toggleTheme}>{theme}MODE</button>
    
//       </div>
//      <Footer />
//     </div>

//   )
// }

// export default App

import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Modal Example</h1>

      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2>Welcome!</h2>
        <p>This is a custom React modal.</p>
      </Modal>
    </div>
  );
}

export default App;


