import React from 'react'

export default function 
InventoryHeader({total, onAdd} : {total:number, onAdd: () => void}) {
  return (
    <div>
      <h1 className='text-3xl font-semibold gap-3 mt-4 sm:text-3xl tracking-tight'>
        VPS Inventory
        <span className='text-xs bg-neutral-700 rounded-lg px-1 ml-2 dark:bg-neutral-800'>
          {total} servers
        </span>
      </h1>
      <p className='mt-1 text-sm text-neutral-400'>Tổng quan máy chủ, trạng thái và thông số</p>
      <div className='mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent'/>
      <div className='mt-4 px-4 flex justify-end'>
        <button className='border rounded-lg text-sm bg-neutral-800
        ring-1 gap-1 border-white/10 px-2 py-1 hover:bg-slate-700 transition
        '>
          + Add VPS
        </button>
         </div>
    </div>
    
  )
}
