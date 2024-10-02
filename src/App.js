import './App.css';
import {useState} from "react";
import Home from "./components/Home";
import Beneficious from "./components/Benficious";
import Clasificaciom from "./components/Clasificaciom";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import MainWindow from "./components/MainWindow";

function App() {
    const tg = window.Telegram.WebApp
    tg.isVerticalSwipesEnabled = false;
    return (
        <div className="flex flex-col items-center text-center gap-4 h-[100vh]">
            <MainWindow/>
        </div>)
}

export default App;
