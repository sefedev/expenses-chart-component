import React from 'react'

const BalanceCard = () => {
  return (
    <div className='bg-SoftRed rounded-2xl text-white flex justify-between items-center p-6 mb-6'>
        <div className='text-left'>
            <h4 >My Balance</h4>
            <h2 className='text-2xl font-semibold'>$921.48</h2>
        </div>
        <div className='flex relative'>
            <div className='border-2 border-white w-14 h-14 rounded-full absolute -inset-x-8'></div>
            <div className='bg-gray-800 w-14 h-14 rounded-full'></div>
        </div>
    </div>
  )
}

export default BalanceCard