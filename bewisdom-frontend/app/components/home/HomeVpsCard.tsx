import { Vps, VpsStatus } from '@/app/(hosting)/mockdata/mockvps'
import InventoryHeader from '@/app/components/hosting/InventoryHeader';
import { VpsSpecGrid } from '@/app/components/hosting/VpsSpecGrid';
import React from 'react'

export default function HomeVpsCard({vps} : {vps : Vps}) {
  const tone = statusTone(vps.status);
  return (
    <article className='group card relative p-4 sm:p-5 lg:p-6 flex flex-col
     gap-1 mt-1 rounded-full px-2 py-4
    text-sm ring-1 ring-inset items-center
    transition ease-out hover:-translate-1 hover:shadow-xl
    '>

      <div className='flex justify-items-center items-center gap-2 min-w-0 '>
        <h4 className='text-base sm:text-lg font-semibold truncate' title={vps.hostname}>
          {vps.hostname}
        </h4>
        <span className={`ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 mt-1 text-sm ring-1 ring-inset ${tone.badge}`}>
          <span className={`inline-block h-1.5 w-1.5 rounded-full ${tone.dot}`}/>
          {vps.status}
        </span>
      </div>
      <div className='mt-1 text-xs sm:text-sm text-sub flex items-center gap-2'>
        <span>{vps.provider}</span>
        <span className="opacity-60">•</span>
        <span>{vps.region}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1.5 text-xs sm:text-sm">
        <Spec label="CPU" value={`${vps.cpuCores}`} />
        <Spec label="RAM" value={`${vps.ramGb} GB`} />
        <Spec label="Storage" value={`${vps.storageGb} GB`} />
        <Spec label="OS" value={vps.os} />
      </div>
         <div className="mt-4 text-[11px] sm:text-xs text-neutral-400">
        Last update: {vps.updatedAt}
      </div>
    </article>
  )
}
function statusTone(status: VpsStatus) {
  switch (status) {
    case 'ACTIVE':
      return { badge: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20', dot: 'bg-emerald-500' }
    case 'MAINTENANCE':
      return { badge: 'bg-amber-500/10 text-amber-400 ring-amber-500/20', dot: 'bg-amber-500' }
    case 'ARCHIVED':
    default:
      return { badge: 'bg-neutral-500/10 text-neutral-400 ring-neutral-500/20', dot: 'bg-neutral-400' }
  }
}
function Spec({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
      <span className="text-neutral-400">{label}:</span>
      <span className="tabular-nums text-neutral-200">{value}</span>
    </span>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">{children}</span>
}

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono tabular-nums">{children}</span>
}