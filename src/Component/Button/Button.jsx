import React from 'react';
import './Button.css'
const Button = ({ name }) => {
    return (
        <button className="relative w-64 h-12 text-center leading-60 uppercase text-2xl duration-500 no-underline focus:outline-none bg-orange-600 text-white hover:delay-200 mt-6 rounded-[24px] group overflow-hidden">
            <svg className="absolute top-0 left-0 w-full border-2 h-full fill-transparent rounded-[24px] overflow-hidden">
                <rect className="absolute top-0 left-0 w-full h-full overflow-hidden fill-transparent rounded-xl stroke-yellow-400 stroke-[10px] duration-[1.5s]" style={{
                    strokeDasharray: '940', rx: '24',
                    ry: '24'
                }}></rect>

            </svg>
            {name}
        </button>
    );
};

export default Button;