import React from 'react'
// import pointer1 from "../../assets/HowWork/pointer1.png"

const Box = ({h1,src}) => {
  return (
    <>
      <div className=" rounded-sm mb-12">
        <img src={src} alt="" />
        <h1 className='font-bold text-[#282938] leading-[84px] text-[32px] '>{h1}</h1>
        <p className='text-[#282938]'>Euismod faucibus turpis eu gravida mi. <span className='block'> Pellentesque et velit aliquam .</span></p>
      </div>
    </>
  )
}

export default Box
