import React from 'react'

const Button = ({ onClick, label, background, labelColor }) => {

const container = `${background ?? "bg-yellow-500"} h-11 flex flex-1 items-center justify-center rounded-lg hover:cursor-pointer max-h-11`

const text = `${labelColor === "white" ? "text-white" : "text-black"} font-medium text-sm`;

    return (
        <div className={container} onClick={onClick}>
            <p className={text}>{label}</p>
        </div>
    )
}

export default Button