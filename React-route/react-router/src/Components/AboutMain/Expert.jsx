import React from 'react'
import Card from '../Element/Cards'

function Expert() {
    return (
        <section className="flex flex-col gap-3 pt-15 w-full justify-center items-center px-[125px] pb-[100px] ">
            <h1 className="h-[97px] w-[40%]  flex-grow shrink-1 text-[#000] text-center text-[33px] font-semibold leading-tight flex items-center justify-center">
                What experts has to say for great design.
            </h1>
            <p className="w-[65%] shrink-0  text-center text-[#444] text-[16px] font-light leading-tight flex ">
                Industry experts agree that great design isn’t just about
                aesthetics—it’s about function, clarity, and purpose. Effective design
                solves real problems, enhances user experience, and builds trust.
            </p>

            <div className=" flex flex-row gap-[30px] flex-wrap lg:flex-nowrap w-full">
                <Card
                    image={"src/assets/Ellipse 3 (2).svg"}
                    name={"Eleanor Pena"}
                    description={
                        "Design is not just what it looks like and feels like. Design is how it works—simple, functional and intuitive."
                    }
                    className={"mb-16"}
                />
                <Card
                    image={"src/assets/Ellipse 4.svg"}
                    name={"Cody Fisher"}
                    description={
                        "Good design is innovative, useful, and unobtrusive. It focuses on essentials and avoids unnecessary complexity in both form and function."
                    }
                    className={"mb-16"}
                />
                <Card
                    image={"src/assets/Ellipse 5.svg"}
                    name={"Leslie Alexander"}
                    description={
                        "Great design considers user needs first. It should be understandable, accessible, and make tasks easier without requiring conscious effort."
                    }
                    className={"mb-16"}
                />
            </div>
        </section>
    )
}

export default Expert