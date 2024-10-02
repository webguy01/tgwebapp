import './App.css';
import {useEffect, useState} from "react";
import Home from "./components/Home";
import Beneficious from "./components/Benficious";
import Clasificaciom from "./components/Clasificaciom";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import MainWindow from "./components/MainWindow";

function App() {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        // Отключаем скроллинг
        tg.setScrollable(false);
    }, []);
    return (
        <div className="flex flex-col overflow-x-hidden overflow-y-hidden items-center text-center gap-4 h-[100vh]">
            <MainWindow/>
        </div>)
}

export default App;
