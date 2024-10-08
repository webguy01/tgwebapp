import {ChevronRight, Link2, X} from "lucide-react";
import {Clock, Explosion, Light} from "./Icons";
import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion';

function ModalPasivo({isActivePasivos, setActivePasivos}) {
    return (
        <motion.div
            initial={{y:"100%"}}
            animate={{y:"0%"}}
            transition={{ease: 'easeInOut', }}
            className="flex gap-5 absolute  left-0 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-t-[20px] w-[100vw] h-[70vh]">
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => setActivePasivos(false)} width={18} height={18} color="#b0b0b0"/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="flex bg-[#383838] w-[90px] h-[90px] rounded-[20px] items-center justify-center">
                    <Clock className="w-[40px]"/>
                </div>
                <h2 className="text-white font-sfprosemibold text-[24px] leading-[26px]">Pasivo</h2>
                <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Aumente sus ingresos pasivos
                    y vea como<br/> crece su saldo cada hora</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <div
                    className="flex flex-row items-center bg-[#383838] rounded-[7px] gap-2 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <img className="w-[25px] h-[25px]" src={coin} alt=""/>
                    <h4>0</h4>
                    <p className="text-[14px] text-[#b0b0b0] font-sfpromedium">/hora</p>
                </div>
                <ChevronRight width={25} height={25} color="#ffffff"/>
                <div
                    className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                    <img className="w-[25px] h-[25px]" src={coin} alt=""/>
                    <h4>100</h4>
                    <p className="text-[14px] text-[#b0b0b0] font-sfpromedium">/ hora</p>
                </div>
            </div>
            <div
                className="flex flex-row rounded-2xl py-4 items-center justify-center gap-2 w-[90vw] text-[15px] font-sfpromedium text-white">
                <div
                    className="flex flex-row gap-3 items-center justify-center bg-[#383838] rounded-[10px] py-3 w-[25vw]">
                    <h4>100</h4>
                    <img className="w-[20px] h-[20px]" src={coin} alt=""/>
                </div>
                <div className="flex flex-row  items-center justify-center bg-[#2890FF] rounded-[10px] py-3 w-[65vw]">
                    Hecho
                </div>
            </div>
        </motion.div>
    )
}

export default ModalPasivo