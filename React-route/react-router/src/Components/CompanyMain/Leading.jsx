import React from 'react'
import Card from '../Element/Cards'

function Leading() {
  return (
    <section className="w-full h-auto   px-[125px] flex flex-row justify-between items-center bg-[#c7ecf1] shadow-lg ">
      <div className="flex flex-col gap-[15px] w-[60%] py-[92px] ">
        <div className="flex py-[10px] px-[15px] items-start rounded-full bg-[#bee1e6] w-fit ml-4 ">
          <p className="text-[#000]  text-[14px] font-medium">
            Top Leading Company
          </p>
        </div>
        <h2 className="text-[33px] font-semibold leading-tight">
          Fresh Ideas for your business design.
        </h2>
        <p className="text-[#444] text-[16px] font-light leading-tight">
          Discover how innovative branding, modern UI/UX trends, and strategic visual storytelling can transform your business identity and attract the right audience in today’s competitive market.
        </p>

        <div className="flex flex-row gap-8 ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Card name={'Guy Hawkins'} image={'src/assets/Ellipse 3 (3).svg'} className={'mb-4'} />
            </div>
            <Card style={'-mt-12'} description={"Bold design decisions, driven by futuristic thinking and clean minimalism, are essential for any business aiming to disrupt the market and stay ahead of the curve. "} className={'hidden'} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-6">
              <Card name={'Darlene Robertson'} image={'src/assets/Ellipse 3 (4).svg'} className={'mb-4'} />
            </div>
            <Card style={'-mt-12'} description={"Bold design decisions, driven by futuristic thinking and clean minimalism, are essential for any business aiming to disrupt the market and stay ahead of the curve. "} className={'hidden'} />
          </div>

        </div>


      </div>
      <div className="flex items-center justify-center  pt-[71px] pb-[94px]">
        <div className="relative">
          <img className="w-[350px] h-[428px] shrink-0 rounded-[16px]" src="src/assets/Rectangle 25.png" alt="" />
          <img className="absolute top-[277px] -right-[95px]" src="src/assets/Rectangle 26.png" alt="" />
        </div>

      </div>


    </section>
  )
}

export default Leading