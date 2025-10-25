import { Vps, VpsStatus } from '@/app/(hosting)/mockdata/mockvps'
import HomeVpsCard from '@/app/components/home/HomeVpsCard';
import React from 'react'

export default function HomeVpsGrid({ 
  vps,
  title= "VPS nổi bật",
  limit = 4,
  status = 'ACTIVE'
 } : {
  vps: Vps[]
  title?: string,
  limit? : number,
  status?: "ALL" | VpsStatus
} ) {
  const rowVps : Vps[] = vps.slice(0,limit);
  return (
      <section className='text-center section mt-16 font-semibold'> 
        <h3 className='text-3xl'>{title}</h3>
      
      <div className='relative items-start justify-items-center justify-center mx-auto 
      mt-6  max-w-7xl auto-rows-fr
      grid
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 xl:gap-6
      '>
          {rowVps.length === 0 &&
          <span className='text-sm text-semibold'>Không có VPS để hiển thị</span>
          } 

      {rowVps.map(v => (
        <HomeVpsCard key={v.id} vps={v} />
      ))}
      </div>
    </section>
  )
}
