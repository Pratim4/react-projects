function Card({ image, name, description, className, style }) {
    return (
        <div className="flex flex-row items-center justify-center gap-4 py-4 ">

            <img className={`w-[46px] h-[46px] ${className}`} src={`${image}`} alt="" />
            <div className="flex flex-col gap-[10px]">
                <p className="text-justify text-[18px] font-semibold ">{name}</p>
                <p className={`text-justify text-[14px] font-light leading-[24px] space-[0.35px] ${style}`}>{description}</p>

            </div>


        </div>
    )
}

export default Card