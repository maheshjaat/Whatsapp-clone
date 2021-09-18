import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    // BEM namimg convention
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
      {/* in the app body we create Sidebar, Chatbar, */}
    </div>
  );
}

export default App;
