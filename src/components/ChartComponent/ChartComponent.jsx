import { Button } from 'antd'
import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto"

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];


const ChartComponent = () => {
  const userData = {
    labels: data.map(item => item.year),
    datasets: [{
      label: "Years Data",
      data: data.map(item => item.value),
      backgroundColor: ["hsl(10, 79%, 65%)"]
    }],
  }

  

  return (
    <div className='text-gray-800 bg-PaleOrange rounded-xl shadow-md px-4 py-6'>
        <h2 className='text-2xl font-semibold'>Spending - Last 7 days</h2>
        <div className='w-full grid place-items-center'>
      <Bar data={userData}/>
      </div>
      <hr className='my-6 shadow-sm'/>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-gray-400'>Total this month</h3>
          <h1 className='font-semibold text-3xl'>$478.33</h1>
        </div>
        <div className='flex flex-col justify-end items-end'>
          <h6 className='text-sm font-semibold'>+2.4%</h6>
          <h4 className='text-gray-400 text-sm'>from last month</h4>
        </div>
      </div>
    </div>
  )
}

export default ChartComponent