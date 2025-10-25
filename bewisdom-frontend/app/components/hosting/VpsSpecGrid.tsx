import React from 'react'

export function VpsSpecGrid({
  cpu, ram, storage, os,
}: { cpu: number; ram: number; storage: number; os: string }) {
  return (
    <div className='relative grid grid-cols-2 mt-3 gap-y-1 text-sm'>
      <span className="text-neutral-500 dark:text-neutral-400">CPU: <b className="tabular-nums">{cpu}</b></span>
      <span className="text-neutral-500 dark:text-neutral-400">RAM: <b className="tabular-nums">{ram}</b></span>
      <span className="text-neutral-500 dark:text-neutral-400">Storage: <b className="tabular-nums">{storage}</b></span>
      <span className="text-neutral-500 dark:text-neutral-400">OS: <b className="tabular-nums">{os}</b></span>
    </div>
  )
}
