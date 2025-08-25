import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
  return (
    <div className={`font-cairo-reg`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
