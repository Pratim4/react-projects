import React from 'react'
import Card from '../Element/Cards'

function Ideas() {
    return (
        <section className="flex flex-row gap-[120px] justify-center items-center py-[80px] w-full px-[125px] ">
            <div className="relative">
                <img src="src/assets/Rectangle 18.png" alt="" className="w-[540px] h-[542px] shrink-0 rounded-[21px] " />
                <img src="src/assets/falling-stock-exchange-statistics-hologram-screen 1.png" alt="" className="absolute top-[328px] -right-[99px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-[15px] w-[50%] ">
                <div className="flex py-[10px] px-[15px] items-start rounded-full bg-[#bee1e6] w-fit ml-4 ">
                    <p className="text-[#000]  text-[14px] font-medium">
                        Digital Marketing Agency
                    </p>
                </div>
                <h2 className="text-[33px] font-semibold leading-tight">
                    Fresh Ideas for your business design.
                </h2>
                <p className="text-[#444] text-[16px font-light leading-1]">
                    Discover how innovative branding, modern UI/UX trends, and strategic visual storytelling can transform your business identity and attract the right audience in today’s competitive market.
                </p>

                <Card className={'-mt-15'} image={"src/assets/Ellipse 1.svg"} name={"Garddy"} description={"Bold design decisions, driven by futuristic thinking and clean minimalism, are essential for any business aiming to disrupt the market and stay ahead of the curve. "} />
                <Card className={'-mt-15'} image={"src/assets/Ellipse 2 (2).svg"} name={"Herdric"} description={"Great business design starts with empathy, simplicity, and purpose — create experiences that are intuitive, beautiful, and meaningful enough to truly connect with your customers.  "} />

            </div>

        </section>
    )
}

export default Ideas