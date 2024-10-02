import {ChevronRight, Link2, X} from "lucide-react";
import {Explosion, Light} from "./Icons";
import {motion} from 'framer-motion'
import axios from "axios";
import {useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import logo from '../assets/logo.jpg'

function DuplicateEnergy({setActiveDuplicate, setActiveModals}) {
    const [energyMax, setEnergyMax] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [isSubscribed, setSubscribe] = useState(false)
    const [telegramId, setTelegramId] = useState(null); // ID пользователя Telegram
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;

    const checkSubscription = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/check_subscription', {
                telegram_id: userData,
            });

            const result = response.data;
            if (result.subscribed) {
                setSubscribe(true)
            } else {
                toast('No estás suscrito al canal');
            }
        } catch (error) {
            console.log('Ошибка при проверке подписки');
        }
    };
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });

            const result = response.data;
            setEnergy(result.info.energy);
            setEnergyMax(result.info.energy_max);
        } catch (error) {
            console.log(error);
        }
    };



    const subscribeToChannel = () => {
        window.open('https://t.me/+raicE6M7Lj85ZWZi', '_blank'); // Переход на канал
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
            checkSubscription()
        } else {
            console.log('Не удалось получить данные пользователя из Telegram');
        }
    }, [isSubscribed]);

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ ease: 'easeInOut' }}
            className="flex absolute left-0 gap-7 z-100 bottom-0 flex-col py-3 px-5 bg-[#212121] rounded-t-[20px] w-[100vw] h-[75vh]"
        >
            <div className="flex flex-row justify-between">
                <div className="w-[10px]"></div>
                <div className="flex flex-row bg-[#383838] p-1 rounded-full">
                    <X onClick={() => { setActiveDuplicate(false); setActiveModals(false); }} width={18} height={18} color="#b0b0b0" />
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <img className="w-[90px] h-[90px] rounded-[20px]" src={logo} alt="logo"/>
                <h2 className="text-white font-sfprosemibold text-[24px]">Cripto Es el Futuro</h2>
                {isSubscribed ? (
                    <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Ye te has suscrito al canal y has recibido el<br/> doble de energia </p>
                ) : (
                    <p className="text-[#b0b0b0] font-sfpromedium text-[14px] leading-[15px]">Subscribete y obten
                        una<br/>
                        recompensa por tu suscripcion</p>
                )}
            </div>
            {isSubscribed ? (
                <div className="flex flex-col items-center justify-center gap-10">
                    <div
                        className="flex flex-row items-center bg-[#383838] w-[100px] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                        <Light className={"w-[20px] h-[20px]"}/>
                        <h4>{energyMax}</h4>
                    </div>
                    <div
                        onClick={subscribeToChannel} // Обработчик для подписки
                        className="flex flex-row rounded-[12px] w-full py-3 items-center justify-center gap-2 w-[43vw] bg-[#2890FF] text-[15px] font-sfpromedium text-white"
                    >
                        <h2>Ir al canal</h2>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-7">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div
                            className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                            <Light className={"w-[20px] h-[20px]"}/>
                            <h4>{energyMax}</h4>
                        </div>
                        <ChevronRight width={20} height={20} color="#ffffff"/>
                        <div
                            className="flex flex-row bg-[#383838] rounded-[7px] gap-1 py-1 px-4 text-white text-[15px] font-sfpromedium">
                            <Light className={"w-[20px] h-[20px]"}/>
                            <h4>{energyMax +1000}</h4>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div
                            onClick={subscribeToChannel} // Обработчик для подписки
                            className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#2890FF] text-[15px] font-sfpromedium text-white"
                        >
                            <h2>Suscribirse</h2>
                        </div>
                        <div
                            onClick={checkSubscription} // Обработчик для проверки подписки
                            className="flex flex-row rounded-[12px] py-3 items-center justify-center gap-2 w-[43vw] bg-[#18212A] text-[15px] font-sfpromedium text-[#2890FF]"
                        >
                            <h2>Verificaciom</h2>
                            <Toaster toastOptions={{
                                className: '',
                                style: {
                                    border: '1px solid #713200',
                                    padding: '16px',
                                    color: '#c5c5c5',
                                    background: '#000000'
                                },
                            }}/>
                        </div>
                    </div>
                </div>
            )}

        </motion.div>
    );
};

export default DuplicateEnergy