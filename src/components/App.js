import React from "react";
import Scanwords from "./Scanwords";
import './App.css'

const App = ({scanwords, open}) =>
    <div className="app">
        <Scanwords
            scanwords={scanwords}
            open={open}
        />
    </div>

export default App;
