import { BrowserRouter } from "react-router-dom";
import React from 'react'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar";



const App = () => {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
