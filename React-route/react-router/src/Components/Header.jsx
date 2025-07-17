import React, { useState } from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Company from '../pages/Company';
import Button from './Element/Button';

function Header({ setPage }) {

    return (
        <section
            className="fixed top-0 z-111 flex  justify-center items-center w-full h-[107px] shrink-0 bg-[#fff] "
            style={{
                boxShadow: "-15px 26px 31px 4px rgba(0, 0, 0, 0.05)",
            }}
        >
            <div className="flex flex-row justify-between w-[90%] ">
                <img src="src/assets/Rectangle 4.png" alt="" />
                <ul className="lg:flex flex-row gap-9 items-center hidden ">
                    <li className="flex flex-row gap-1 cursor-pointer " onClick={() => {
                        setPage(<Home />);
                    }}>
                        <p>Home</p>{" "}
                    </li>
                    <li className="flex flex-row gap-1 cursor-pointer " onClick={() => {
                        setPage(<About />)
                    }}>
                        <p>About</p>
                        <img
                            className="w-[18px] h-[18px]"
                            src="src/assets/Keyboard arrow down.svg"
                            alt=""
                        />{" "}
                    </li>
                    <li className="flex flex-row gap-1 cursor-pointer" onClick={() => {
                        setPage(<Company />)
                    }}>
                        <p>Company</p>
                        <img
                            className="w-[18px] h-[18px]"
                            src="src/assets/Keyboard arrow down.svg"
                            alt=""
                        />{" "}
                    </li>
                    <li className="flex flex-row gap-1">
                        <p>Pages</p>
                        <img
                            className="w-[18px] h-[18px]"
                            src="src/assets/Keyboard arrow down.svg"
                            alt=""
                        />{" "}
                    </li>
                    <li className="flex flex-row gap-1">
                        <p>Blog</p>
                        <img
                            className="w-[18px] h-[18px]"
                            src="src/assets/Keyboard arrow down.svg"
                            alt=""
                        />{" "}
                    </li>
                    <li className="flex flex-row gap-1">
                        <p>Shop</p>
                        <img
                            className="w-[18px] h-[18px]"
                            src="src/assets/Keyboard arrow down.svg"
                            alt=""
                        />{" "}
                    </li>
                </ul>
                <div className="lg:flex items-center hidden">
                    <Button
                        text="Get Started"
                        className={" bg-[#BEE1E6] "}
                        color={"#000"}
                    />
                </div>
                <div className="flex items-center">
                    <p className="text-3xl text-gray-600 -mr-5">&equiv;</p>
                </div>
            </div>
        </section>

    )
}

export default Header