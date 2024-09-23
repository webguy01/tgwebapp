import {ChevronRight, X} from "lucide-react";
import {Clock, Finger} from "./Icons";
import coin from "../assets/coin1.svg";
import {motion} from 'framer-motion'

function ModalToques({isActiveToques, setActiveToques}) {
    return (
        <motion.div
            initial={{y:"100%"}}
            animate={{y:"0%"}}
            transition={{ease: 'easeInOut', }}
            className="flex gap-5 absolute left-0 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-[20px] w-[100vw] h-[70vh]">
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => setActiveToques(false)} width={30} height={30} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex items-center justify-center bg-[#383838] w-[100px] h-[100px] rounded-[20px]">
                    <Finger className="w-[50px]"/>
                </div>
                <h2 className="text-white font-sfprosemibold text-[42px] leading-[42px]">Toques</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[20px] leading-[24px]">Major tus clics para ganar
                    mas<br/>
                    monedas con cada toques</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row items-center bg-[#383838] rounded-[7px] gap-2 py-1 px-4 text-white text-[20px] font-sfpromedium">
                    <img className="w-[30px] h-[30px]" src={coin} alt=""/>
                    <h4>0</h4>
                    <p className="text-[17px] text-[#b0b0b0] font-sfpromedium">/tocar</p>
                </div>
                <ChevronRight width={30} height={30} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[20px] font-sfpromedium">
                    <img className="w-[30px] h-[30px]" src={coin} alt=""/>
                    <h4>100</h4>
                    <p className="text-[17px] text-[#b0b0b0] font-sfpromedium">/tocar</p>
                </div>
            </div>
            <div
                className="flex flex-row rounded-2xl py-4 items-center justify-center gap-2 w-[90vw] text-[25px] font-sfpromedium text-white">
                <div
                    className="flex flex-row gap-3 items-center justify-center bg-[#383838] rounded-[10px] py-4 w-[25vw]">
                    <h4>100</h4>
                    <img className="w-[25x] h-[25px]" src={coin} alt=""/>
                </div>
                <div className="flex flex-row  items-center justify-center bg-[#2890FF] rounded-[10px] py-4 w-[65vw]">
                    Hecho
                </div>
            </div>
        </motion.div>
    )
}

export default ModalToques