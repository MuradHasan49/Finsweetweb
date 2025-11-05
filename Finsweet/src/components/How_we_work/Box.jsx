import React from 'react'
import pointer1 from "../../assets/HowWork/pointer1.png"

const Box = ({h1}) => {
  return (
    <>
      <div className=" rounded-sm mb-12">
        <img src={pointer1} alt="" />
        <h1 className='font-bold text-[#282938] leading-[84px] text-[32px] '>{h1}</h1>
        <p className='text-[#282938]'>Euismod faucibus turpis eu gravida mi. <span className='block'> Pellentesque et velit aliquam .</span></p>
      </div>
    </>
  )
}

export default Box
