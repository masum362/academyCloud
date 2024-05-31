import React from 'react'

const Button = ({children,style ,type,disabled}) => {
    return (
        <button type={type ? type : "button"} disabled={disabled} className={`bg-themePrimary text-white px-4 py-2 rounded-lg font-bold hover:bg-themePrimary/80 duration-150 ${style}`}>{children}</button>
    )
}

export default Button