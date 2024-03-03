import React from 'react';

const NumberBox = ({ num, unit}) => {
    return (
        <div className="flex flex-col items-center px-2 gap-2">
            <div className="flex justify-center">
                <div className="text-5xl font-bold font-im-fell">
                    {num}
                </div>
            </div>
            <p className="text-lg font-semibold text-luxor-gold-600 font-im-fell">
                {unit}
            </p>
        </div>
    );
};

export default NumberBox;
