import React from 'react'
import PriceLine from '../Global/PriceLine'
import Button from '../Global/Button'

const PricingCard = ({Price,Perdesign,Heding,p,classNam,className}) => {
  return (
    <>
      <div className="    w-[406px] h-[745px] p-12
    bg-[#F4F6FC] 
    rounded-lg
    transition-all duration-300 ease-in-out
    cursor-pointer
    hover:bg-[#1C1E53] hover:text-white
    active:bg-[#1C1E53] active:text-white
    group ">
        <div className="flex gap-3 items-center ">
            <h1 className={`text-[38px] font-semibold leading-14 text-[#282938] group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white `}>{Price}</h1>
            <span className='text-[#2405F2] text-[15px] leading-7 group-hover:text-[#FCD980] group-active:bg-[#1C1E53] group-active:text-[#FCD980]'>{Perdesign}</span>
        </div>
        <div className="">
            <h2 className='text-[24px] font-medium leading-9 text-[#282938] mt-4 mb-2 group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white'>{Heding}</h2>
            <p className='w-[281px] opacity-70 text-[16px] leading-7 font-medium text-[#282938] group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white '>{p}</p>
        </div>
        <div className="flex flex-col gap-5 py-18 ">
            <PriceLine
            className={"group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white"}
            text={"All limited links "}
            />
            <PriceLine
            
            className={"group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white"}
            text={"Own analytics platform"}
            />
            <PriceLine
                        className={"group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white"}
            text={"Chat support"}
            />
            <PriceLine
            className={`group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white ${classNam}`}
            text={"Optimize hashtags"}
            />
            <PriceLine

            className={`group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white ${classNam}`}
            text={"Unlimited users"}
            />
            <PriceLine

            className={`group-hover:text-white group-active:bg-[#1C1E53] group-active:text-white ${className}`}
            text={"Assist and Help"}
            />
            <div className=" mx-auto py-10">
            <Button className={"bg-black text-white group-hover:bg-amber-300 group-hover:text-black transition-transform duration-300 ease-in-out"}>
                Get started
            </Button>
            </div>
        </div>

      </div>
    </>
  )
}

export default PricingCard
