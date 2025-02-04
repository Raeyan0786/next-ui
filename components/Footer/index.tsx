import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className='w-[80%] mt-10 mx-auto flex justify-between'>
            <div>
                <p className='text-sm font-semibold leading-6 text-white'>© 2024. All Rights Reserved. Made by Switcher.faiz!</p>
            </div>
            <div>
                <div className='flex gap-10'>
                    <p className='text-sm font-semibold leading-6 text-white'>Instructions</p>
                    <p className='text-sm font-semibold leading-6 text-white'>License</p>
                    <p className='text-sm font-semibold leading-6 text-white'>Terms of Use</p>
                    <p className='text-sm font-semibold leading-6 text-white'>Privacy</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer