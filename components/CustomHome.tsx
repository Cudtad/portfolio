"use client"

import React, { useRef, useState, useEffect } from 'react'
import CustomButton from './CustomButton'

const CustomHome = () => {

    const [count, setCount] = useState(2);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 7000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className='main-home'>
            <div className='main-home__slides relative h-full'>
                <div className={`w-full h-full main-home__slides absolute z-10 ${count % 2 === 0 ? "fade-in" : "fade-out"}`}>
                    <img
                        src='/img_bg_1.jpg'
                        alt='background'
                        className='w-full h-full object-cover'
                    />
                    <div className={`main-home__slides__content flex flex-col justify-center ${count % 2 === 0 ? 'move-up' : ""}`}>
                        <h1 className='main-home__slides__content-name'>Hi!</h1>
                        <h1 className='main-home__slides__content-name'>I'm Cudtad</h1>
                        <CustomButton title='Download CV' btnType='button'
                            containerStyles='border-solid border-black border px-6 py-3 mt-6'
                            rightIcon='download'
                        />

                    </div>
                </div>
                <div className={`w-full h-full main-home__slides absolute z-0 ${count % 2 !== 0 ? "fade-in" : ""}`}>
                    <img
                        src='/img_bg_2.jpg'
                        alt='background'
                        className='w-full h-full object-cover'
                    />  
                    <div className={`main-home__slides__content flex flex-col justify-center ${count % 2 !== 0 ? "move-up" : ""}`}>
                        <h1 className='main-home__slides__content-name'>I am</h1>
                        <h1 className='main-home__slides__content-name'>a developer</h1>
                        <CustomButton title='View Portfolio' btnType='button'
                            containerStyles='border-solid border-black border px-6 py-3 mt-6'
                            rightIcon='portfolio'
                        />

                    </div>
                </div>

            </div>
        </div >
    )
}

export default CustomHome