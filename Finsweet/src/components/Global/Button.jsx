import React, { Children } from 'react'

const Button = ({children,className}) => {
  return (
    <>
    <button className={`py-4 px-12 border-1 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}
>{children}</button>
      
    </>
  )
}

export default Button
