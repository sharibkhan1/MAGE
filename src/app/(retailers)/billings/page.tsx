import BackdropGradient from '@/components/bggradiant'
import { Button } from '@/components/ui/button'
import DotPattern from '@/components/ui/dots'
import { cn } from '@/lib/utils'
import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa"

const Page = () => {
  return (
    <div className='flex items-center justify-center dark-eclipse h-screen flex-col'>
  <BackdropGradient className='w-4/12 h-2/6 opacity-40' container="flex flex-col items-center">

        <h2 className="md:text-5xl mt-20 text-3xl font-bold text-gradient5 mb-8">Pricing Plans That Fit Your Right</h2>
  <div className="flex flex-col w-[90%] md:w-[60%]  px-6">
  {/* Row of 3 cards */}
  <div className="flex  flex-col md:flex-row gap-6 justify-between">
    {/* Card 1 */}
     <div
      className="w-full md:w-[50%] p-6 bg-black text-white rounded-3xl border-x-2 border-t-2 border-[#00ffff] shadow-md relative"
      style={{
        boxShadow: "inset 0 0 40px 1px #00ffff, inset 0 -2px 0 0 transparent",
      }}
    >
      <DotPattern
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
          )}
        />
          <div className="absolute top-0 left-0 h-[100%] rounded-bl-3xl rounded-br-3xl w-full z-[1] " 
        style={{
          boxShadow: "inset 0 -50px 70px 0px black", // inner bottom shadow
        }}></div>
<h3 className="text-4xl text-start font-bold mb-4">Free Services</h3>
<h3 className="text-4xl text-start font-bold mb-4">₹0</h3>

      <ul className="space-y-2 mt-6 p-5">
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Advanced Chat Assistance</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>100 Requests per Month</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>100 Requests per Month</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>100 Requests per Month</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Custom Integrations</span>
        </li>
        <li className="flex items-center gap-2">
          <FaTimes  className="text-red-500" />
          <span>Priority Support</span>
        </li>
      </ul>
      <Button className="mt-[25%] w-full border-2 border-white">
        Registered
      </Button>

    </div>


    {/* Card 3 */}
    <div
      className="w-full md:w-[50%]  p-6 bg-black text-white rounded-3xl border-x-2 border-t-2 border-[#ffa500] shadow-md relative"
      style={{
        boxShadow: "inset 0 0 40px 1px #ffa500, inset 0 -2px 0 0 transparent",
      }}
    >
      <DotPattern
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
          )}
        />
           <div className="absolute top-0 left-0 h-[100%] rounded-bl-3xl rounded-br-3xl  w-full z-[1] " 
        style={{
            boxShadow: "inset 0 -50px 70px 0px black", // inner bottom shadow
        }}></div>
 <h3 className="text-4xl text-start font-bold mb-4">Best for Price</h3>
 <h3 className="text-4xl text-start font-bold mb-4">₹499</h3>

 <ul className="space-y-2 mt-6 p-5">
 <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Premium Chat Assistance</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Unlimited Requests</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Custom Integrations</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Custom Integrations</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Custom Integrations</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          <span>Priority Support</span>
        </li>
      </ul>
      <Button className="mt-[25%] w-full border-2 border-white">
      Subscribe
      </Button>

    </div>

    
  </div>
</div>
</BackdropGradient>

    </div>
  )
}

export default Page