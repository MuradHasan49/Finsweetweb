import React from 'react'
import Heading from '../Global/Heading'
import PricingCard from './PricingCard'
import Questions from '../questions/Questions'

const Pricing = () => {
  return (
    <>
      <div className="container py-32">
        <div className="flex flex-col gap-4 items-center">
        <Heading
        Heading={"Our Pricing Plans"}
        />
        <p className=' md:w-[562px] font-medium text-[16px] text-[#282938]'>When you’re ready to go beyond prototyping in Figma, Webflow is ready to <span className='md:block'> help you bring your designs to life — without coding them.</span></p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-10 md:gap-0 md:flex md:flex-row justify-between py-16">
        <PricingCard
        Price={"$299"}
        Perdesign={"Per Design"}
        Heding={"Landing Page"}
        p={"When you’re ready to go beyond prototyping in Figma"}
        classNam={ `filter brightness-0 invert opacity-70 contrast-5`}
        className={`opacity-0`}
        />
        <PricingCard
         Price={"$399"}
        Perdesign={"Multi Design"}
        Heding={"Website Page"}
        p={"When you’re ready to go beyond prototyping in Figma, "}
        className={`opacity-0`}
        />
        <PricingCard
         Price={"$299"}
        Perdesign={"Per Design"}
        Heding={"Complex Project"}
        p={"When you’re ready to go beyond prototyping in Figma, "}
        />
      </div>
      <div className="">
        <Questions/>
      </div>
    </div>
    </>
  )
}

export default Pricing
