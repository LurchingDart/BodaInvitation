import React from 'react';
import NumberBox from './NumberBox';

const TimerContainer = ({ days, hours, minutes, seconds }) => {

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return (
        <div className="flex flex-row gap-1 my-5">
            <NumberBox num={days} unit="Días"/>
            <span className="text-luxor-gold-600 text-5xl font-normal">:</span>
            <NumberBox num={hours} unit="Horas"/>
            <span className="text-luxor-gold-600 text-5xl font-normal">:</span>
            <NumberBox num={minutes} unit="Minutos"/>
            <span className="text-luxor-gold-600 text-5xl font-normal">:</span>
            <NumberBox num={seconds} unit="Segundos"/>
        </div>
    );
};

export default TimerContainer;