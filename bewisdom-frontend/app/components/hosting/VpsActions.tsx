import React from 'react'

export default function VpsActions({onUpdate, onDelete}: {onUpdate: () =>void, onDelete: () => void}) {
  return (
    <div className='mt-auto pt-3 flex justify-end items-center gap-3'>
      <button className='border rounded-lg px-3 py-1 text-xs border-white/10 bg-white/5 text-neutral-200
      hover:bg-white/10 transition
      '>
        Edit
      </button>
      <button className='border rounded-lg px-3 py-1 text-xs text-rose-400 border-rose-600 bg-rose-500/10
      hover:bg-white/10 transition ring-1 ring-inset ring-rose-500/20 hover:ring-rose-500/15
      '>
        Delete
      </button>
    </div>
  )
}
