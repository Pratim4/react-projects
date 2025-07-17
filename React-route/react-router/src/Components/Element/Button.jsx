function Button({ text, className, onClick, color }) {
    return (
        <button className={`flex flex-row gap-1 px-6 py-2 rounded-lg h-auto items-center justify-center    ${className}`} onClick={onClick}> {text} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <g clip-path="url(#clip0_2_83)">
                <path d="M9 3L7.9425 4.0575L12.1275 8.25H3V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z" fill={`${color}`} />
            </g>
            <defs>
                <clipPath id="clip0_2_83">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg></button>
    )
}

export default Button