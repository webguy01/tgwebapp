import Header from "./Header";
import CounterTitul from "./CounterTitul";
import ProgressBar from "./ProgressBar";
import {Suspense, useState} from "react";
import ModalEnergiaExtra from "./ModalEnergiaExtra";
import ModalListing from "./ModalListing";
import {Route} from "react-router-dom";

function Home({isActive, setActive}) {
    const tg = window.Telegram.WebApp;
    tg.disableVerticalSwipes()
    return (
        <Suspense fallback={ <p className="text-black text-[96px]">Loading..</p> }>
            <div className="flex flex-col h-[90%] justify-between">
                <Header/>
                <CounterTitul/>
                <ProgressBar isActive={isActive} setActive={setActive} />
                {isActive && <ModalEnergiaExtra isActive={isActive} setActive={setActive} /> }
            </div>
        </Suspense>
    )
}

export default Home;