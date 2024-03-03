'use client'
import TimerContainer from "@/components/coundownTimer/TimerContainer";
import TimerInput from "@/components/coundownTimer/TimerInput";
import {useEffect, useState} from "react";
import MessageCountdown from "@/components/coundownTimer/MessageCountdown";


export default function Countdown() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [message, setMessage] = useState('');

    let countDownDate = new Date('April 19, 2024 00:00:00').getTime();

    useEffect(() => {
        let updateTime = setInterval(() => {
            let now = new Date().getTime();
            let difference = countDownDate - now;

            let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            let newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);

            if (difference <= 0) {
                clearInterval(updateTime);
                setMessage('Hoy es la boda!');
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        });
        return () => {
            clearInterval(updateTime);
        }
    }, []);

    return (
        <div className="flex flex-col items-center">
            <MessageCountdown message={message}/>
            <TimerContainer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </div>
    );
}