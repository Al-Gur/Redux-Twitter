import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


function App() {
    return (
        <div className={'app'}>
                <Navigation/>
                <Body/>
        </div>
    )
}

export default App
