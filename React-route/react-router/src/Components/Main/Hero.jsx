import React from 'react'
import Button from '../Element/Button'


function Hero() {
    return (
        <section className="h-auto w-full shrink-0 bg-[#bee1e6] px-[50px] lg:px-[166px] flex flex-row justify-between pt-[107px]">
            <div className="flex flex-col gap-[28px] py-[81px] w-[100%] ">
                <div className="flex py-[10px] px-[20px] items-start rounded-full bg-[#006d77] w-fit ml-4 ">
                    <p className="text-[#fff]  text-[14px] font-medium">
                        Digital Marketing Agency
                    </p>
                </div>
                <div className="lg:w-[65%] w-[100%] text-[#000] text-[45px] lg:text-[53px] font-semibold p-[10px]  leading-tight">
                    <p>Advanced analytics to grow your business</p>
                </div>
                <div className="color-[#444] lg:w-[65%] w-[100%] text-[16px] font-light leading-tight p-[10px] ">
                    <p>
                        Make smarter decisions, improve performance, and drive growth with
                        powerful data insights tailored to your business needs and goals.
                    </p>
                </div>
                <div className="flex flex-row gap-[71px]">
                    <Button
                        text={"Get Started"}
                        className={"bg-black text-white"}
                        color={"white"}
                    />
                    <Button
                        text={"How it works"}
                        className={"border border-[#006D77]  text-[#000]"}
                        color={"#000"}
                    />
                </div>
            </div>

            <div className="h-[394px] w-[315px] shrink-0 rounded-[37px] border-2 border-[#006D77] mt-[98px] relative hidden lg:block ">
                <img
                    src="src/assets/Rectangle 6.png"
                    alt=""
                    className="absolute left-[32px] bottom-[13px] h-[398px] w-[339px] shrink-0 "
                />
                <div className="absolute -left-[21px] bottom-[27px]">
                    <div className="w-[184px] h-[191px] shrink-0 rounded-[18px] bg-[#fff] relative overflow-hidden">
                        <svg
                            className="absolute top-[68px]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="184"
                            height="123"
                            viewBox="0 0 184 123"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0 57.0204L8 62.2041C15 69.9796 31 85.5306 46 72.5714C61 59.6122 77 23.3265 92 25.9184C107 28.5102 123 69.9796 138 72.5714C153 75.1633 169 36.2857 176 18.1429L184 0V127H176C169 127 153 127 138 127C123 127 107 127 92 127C77 127 61 127 46 127C31 127 15 127 8 127H0V57.0204Z"
                                fill="#006D77"
                            />
                        </svg>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero