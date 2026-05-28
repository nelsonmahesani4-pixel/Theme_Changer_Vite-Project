import { useState } from "react";
import { ThemeContext } from "../Themeprovider";
import { useContext } from "react";



export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext)
      console.log("theme=>", theme, toggleTheme);
    
 

  return (
    <nav style={{ padding: "10px 20px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", backgroundColor: theme === "Dark" ? "black" : "white", color: theme === "Light" ? "black" : "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>MyShop</h2>

        {/* Desktop Menu */}
        <ul style={{ display: window.innerWidth > 768 ? "flex" : "none", gap: "15px", listStyle: "none", margin: 0 }}>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Button */}
    
        <button onClick={toggleTheme} style = {{ border: "1px solid #ccc ", cursor: "pointer" , borderRadius: "5px", display: "block" , padding: "10px", width: "200px"}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0m29wqTs29G02HbNbO0bRTe1rlhfEJDaiQ&s" alt="" width="20" height="20" />{theme} Mode</button>
      </div>


    </nav>
  );
}