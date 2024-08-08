import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12 mx-auto px-4'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 rounded-xl w-full lg:w-full p-8 pt-9 m-3 flex items-center'>
          <div className='flex-1'>
            <p className='text-lg font-semibold text-gray-500'>Earnings</p>
            <p className='text-2xl font-bold'>$100,000</p>
            <div className='mt-6'>
              <Button 
                color='white'
                bgColor='blue'
                text='Download'
                borderRadius='10px'
                size='md'
              />
            </div>
          </div>
          <div className='flex-1 h-full bg-hero-pattern bg-no-repeat bg-cover bg-center rounded-xl'>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
              md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button' 
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>   
    </div>
  )
}

export default Ecommerce;
