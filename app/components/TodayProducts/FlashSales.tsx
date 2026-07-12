'use client';

import { useState, useEffect } from "react";

const FlashSales = () => {
    const targetDate = new Date(2026, 7, 4).getTime(); 
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    // console.log(timer);
    useEffect(() => {
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            // console.log('Distance:', distance);
            // console.log('Timer:', timer);
            // console.log('now:', now);
            if (distance<=0){
                clearInterval(countdown);
                return;
            }
           
            setTimer({
                days:Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours:Math.floor((distance / (1000 * 60 * 60)) %24 ),
                minutes:Math.floor((distance / (1000 * 60)) %60 ),
                seconds:Math.floor((distance / 1000 )%60 )
            })
            
            
        }, 1000);
        return () => clearInterval(countdown);

    }, [])
    return (
        <>
            {/* flash sales */}
            <div className="w-full flex flex-col md:flex-row md:items-end  gap-6 md:gap-13 ">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Flash Sales
                </h2>

                <div className="flex items-end gap-3 md:gap-6">

                    <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 mb-1">Days</p>
                        <p className="text-3xl font-bold">{timer.days}</p>
                    </div>

                    <span className="text-2xl font-bold text-slate-500">:</span>

                    <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 mb-1">Hours</p>
                        <p className="text-3xl font-bold">{timer.hours}</p>
                    </div>

                    <span className="text-2xl font-bold text-slate-500">:</span>

                    <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 mb-1">Minutes</p>
                        <p className="text-3xl font-bold">{timer.minutes}</p>
                    </div>

                    <span className="text-2xl font-bold text-slate-500">:</span>

                    <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 mb-1">Seconds</p>
                        <p className="text-3xl font-bold">{timer.seconds}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FlashSales