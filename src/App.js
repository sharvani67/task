import React from "react";
import Lead from "./components/pages/Lead";
import './App.css';
import Employee from './components/pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Manager from './components/pages/Manager';


function App() {
  return (
    <div className="App">
      <Lead />
     <Employee/>
     <Manager/>
    </div>
  );
}

export default App;
