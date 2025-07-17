import React from 'react'
import Card from './Element/Cards'


function Footer() {
    return (
        <section className='w-full flex flex-row justify-between items-center py-[125px] px-[125px]'>
            <div className='flex flex-row gap-4 w-[30%]'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <img className='-ml-[120px]' src="src/assets/Rectangle 4.png" alt="" />
                    <Card className={'hidden'} name={'Eleanor Pena'} description={'Bold design decisions, driven by futuristic thinking and clean minimalism, are essential for any business aiming to disrupt the market and stay ahead of the curve.'} />
                </div>


            </div>




            <div className='flex flex-col gap-4 '>
                <p className='text-[18px] font-semibold'>ABOUT US</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Mission & Vision </p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Our Company </p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Our Projects</p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wider' > Our Team </p>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-[18px] font-semibold'>DISCOVER</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Projects & Research</p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Client Review </p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Our Projects</p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wider' > Our Team </p>
                </div>
            </div>


            <div className='flex flex-col gap-4'>
                <p className='text-[18px] font-semibold'> USEFUL lINKS</p>
                <div className='flex flex-col gap-2'>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Contact Us </p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Teams & Conditions </p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Review</p>
                    <p className='text-[#929292] text-[15px] font-semibold tracking-wide' > Social Media</p>

                </div>
            </div>



        </section>
    )
}

export default Footer