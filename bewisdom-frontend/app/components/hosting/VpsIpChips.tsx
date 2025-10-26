import React from 'react'

export default function VpsIpChips({ipPrivate, ipPublic} : {ipPrivate: string, ipPublic: string}) {
  return (
    <div>
      <div className='mt-3 flex flex-wrap  items-center gap-2 text-xs text-sub'>{ipPrivate && 
        <span className='rounded-md tabular-nums bg-white/5 px-2 py-1 ring-1 ring-white/10 font-semibold'>{ipPrivate}</span>
        }</div>
      <div className='mt-3 flex flex-wrap  rounded-2xl items-center gap-2 text-xs text-sub'>{ipPublic && 
        <span className='rounded-md tabular-nums bg-white/5 px-2 py-1 ring-1 ring-white/10 font-semibold'>{ipPublic}</span>
        }</div>
      
    </div> 
  )
}
