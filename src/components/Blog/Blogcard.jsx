import React from 'react'
import ArrowBTN from '../Banner/ArrowBTN'
import { Link } from 'react-router-dom'

const Blogcard = ({src,Date,Head,p}) => {
  return (
    <>

      <div className="w-[405px] h-[610px]">
            <img className='h-[285px]' src={src}alt="" />
            <div className="flex flex-col gap-4">
            <span className='mt-6 text-[16px] font-medium leading-7 text-[#282938] opacity-70'>{Date}</span>
            <h2 className='text-[26px] font-medium leading-9 text-[#282938]'>{Head}</h2>
            <p className='text[16px] leading-7 text-[#282938]'>{p}</p>
           <Link to={"/ReadMore"}><ArrowBTN className="text-[16px] font-medium leading-7 !text-[#282938] ">Read More</ArrowBTN></Link> 
            </div>
      </div>
    </>
  )
}

export default Blogcard
