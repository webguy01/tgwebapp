import coin from '../assets/coin1.svg'
import {motion} from 'framer-motion'
import {Coin} from "./Coin";
import {useEffect, useState} from "react";
import axios from "axios";

function CounterTitul({energy, setEnergy}) {
    const [allClick, setAllClick] = useState(0);
    const [level, setLevel] = useState(1);
    const [telegramId, setTelegramId] = useState(null);
    const [cooldown, setCooldown] = useState(false); // State to handle cooldown
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id;

    const fetchUserInfo = async () => {
        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData,
            });

            if (response.data.ok) {
                setAllClick(response.data.info.balance);
                setLevel(response.data.info.modifies.toques_lvl);
            } else {
                console.error('Ошибка при получении данных о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при запросе на сервер:', error);
        }
    };

    const handleClick = async () => {
        if (cooldown) return;
        setCooldown(true);

        try {
            const response = await axios.post('https://khabyminero.com/clicker', {
                telegram_id: telegramId,
                click_count: 1,
            });

            if (response.data.ok) {
                setAllClick((prev) => prev + level);
            } else {
                console.error('Ошибка при обновлении количества кликов');
            }
        } catch (error) {
            console.error('Ошибка при отправке клика на сервер:', error);
        }


        setTimeout(() => {
            setCooldown(false);
        }, 300);
    };

    const decreaseEnergy = () => {
        if (energy > 0) {
            setEnergy((prevEnergy) => prevEnergy - 1);
        } else {
            console.log('Энергия не может быть меньше 0');
        }
    };

    const handleTouchStart = (e) => {
        e.preventDefault();
        if (e.touches.length >= 1) {
            handleClick();
            decreaseEnergy();
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchUserInfo();
        } else {
            console.error('Не удалось получить данные пользователя из Telegram');
        }
    }, [userData]);

    return (
        <div className="flex flex-col items-center justify-between gap-7">
            <h1 className="text-white font-sfprosemibold text-[48px]">{allClick}</h1>
            <motion.div
                whileTap={{ scale: 0.9 }}
                onTouchStart={handleTouchStart}
                onClick={() => {
                    handleClick();
                    decreaseEnergy();
                }}
            >
                <Coin className={"w-[70vw] h-[40vh]"} />
            </motion.div>
        </div>
    );
};

export default CounterTitul;