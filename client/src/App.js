import { BrowserRouter } from "react-router-dom";
import React from 'react'
import AppRouter from "./components/AppRouter";



const App = () => {
  return (
    <BrowserRouter className="App">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
