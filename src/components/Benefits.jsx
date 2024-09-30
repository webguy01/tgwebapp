import {useEffect, useState} from "react";
import {BigRocket, Clock, Explosion, Finger, Shout} from "./Icons";
import {ChevronRight} from "lucide-react";
import axios from "axios";

function Benefits({setActiveToques, setActivePasivos, setActive}) {
    const [isTab, setTab] = useState('benefits');
    const[refs, setRefs] = useState(0)
    const [telegramId, setTelegramId] = useState(null);
    const tg = window.Telegram.WebApp;
    const userData = tg.initDataUnsafe?.user?.id


    // Получение данных о топ-игроках и позиции пользователя
    const fetchTopPlayers = async () => {
        if (!userData) {
            alert('telegram_id отсутствует');
            return;
        }

        try {
            const response = await axios.post('https://khabyminero.com/get_info', {
                telegram_id: userData
            });

            const result = response.data;
            setRefs(result.info.referrals)
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (userData) {
            setTelegramId(userData);
            fetchTopPlayers();
        } else {
            alert('Не удалось получить данные пользователя из Telegram');
        }
    }, []);

    console.log(isTab)
    return (
        <div className="flex flex-col gap-1 rounded-[10px]">
            <div
                className="flex flex-row items-center px-5 py-2 justify-between font-sfprosemibold text-[21px] text-[#212121]">
                <h2 onClick={() => setTab('benefits')}>Beneficios</h2>
                <h2 onClick={() => setTab('aumentacion')}>Aumentacion</h2>
            </div>

            {isTab === 'benefits' ? (
                <div
                    className="flex flex-col items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                    <div className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Clock className={"w-[30px] h-[30px]"}/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[16px]">Pasivo</h2>
                                <p className="font-sfpromedium text-[13px] text-[#b0b0b0]">0 Amigo</p>
                            </div>
                        </div>
                        <h2 className="text-[#b0b0b0]">Inactivo</h2>
                    </div>

                    <div onClick={() => setActiveToques(true)}
                         className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Finger className={"w-[30px] h-[30px]"}/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[16px]">Toques</h2>
                                <p className="font-sfpromedium text-[13px] text-[#b0b0b0]">{refs} Amigo</p>
                            </div>
                        </div>
                        <ChevronRight color="#b0b0b0"/>
                    </div>

                    <div onClick={() => setActive(true)}
                         className="flex items-center px-5 py-2 bg-[#212121] rounded-[10px] justify-between w-[90vw]">
                        <div className="flex flex-row items-center gap-5">
                            <div className="rounded-[15px] bg-[#282828] p-2">
                                <Explosion className={"w-[30px] h-[30px]"}/>
                            </div>
                            <div className="text-left">
                                <h2 className="font-sfpromedium text-white text-[16px]">Energia extra</h2>
                                <p className="font-sfpromedium text-[13px] text-[#b0b0b0]">{refs} Amigo</p>
                            </div>
                        </div>
                        <ChevronRight color="#b0b0b0"/>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-5 gap-3">
                    <BigRocket className={"w-[80px] h-[80px]"}/>
                    <h2 className="text-white font-sfprosemibold text-[24px]">Not yet</h2>
                    <p className="text-[#b0b0b0] font-sfpromedium text-[18px]">Boosts coming soon</p>
                </div>
            )}
        </div>
    )
}

export default Benefits;