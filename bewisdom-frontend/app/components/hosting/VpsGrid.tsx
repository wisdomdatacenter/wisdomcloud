import React from 'react'

export function VpsGrid({children} : {children:React.ReactNode}) {
  return (
    <div className='relative mx-3 mt-8 auto-rows-fr grid grid-cols-1
    md:mx-2 lg:mx-3 xl:mx-4
    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    gap-4 sm:gap-6 xl:gap-8 px-3 sm:px-4 xl:px-0 max-w-screen
    '>
      {children}
    </div>
  )
}
