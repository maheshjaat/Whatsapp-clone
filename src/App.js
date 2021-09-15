import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    // BEM namimg convention
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
      {/* in the app body we create Sidebar, Chatbar, */}
    </div>
  );
}

export default App;
