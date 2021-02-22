import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NotesProvider } from "./context/Notes";
import { PopupProvider } from "./context/Popup";

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
