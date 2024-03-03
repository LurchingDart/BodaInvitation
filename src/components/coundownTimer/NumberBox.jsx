import React from 'react';

const NumberBox = ({ num, unit}) => {
    return (
        <div className="flex flex-col items-center px-2 gap-2">
            <div className="flex justify-center">
                <div className="text-5xl font-bold font-dancing text-luxor-gold-600">
                    {num}
                </div>
            </div>
            <p className="text-lg font-semibold font-im-fell">
                {unit}
            </p>
        </div>
    );
};

export default NumberBox;
