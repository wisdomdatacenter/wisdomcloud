
import { VpsStatus } from '@/app/(hosting)/mockdata/mockvps'
import React from 'react'

const tone: Record<VpsStatus, string> = {
  ACTIVE: 'bg-emerald-500/10 text-emerald-400 ring-emerald-500/20',
  MAINTENANCE: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
  ARCHIVED: 'bg-neutral-500/10 text-neutral-400 ring-neutral-500/20',
}
const dot: Record<VpsStatus, string> = {
  ACTIVE: 'bg-emerald-500', MAINTENANCE: 'bg-amber-500',
 ARCHIVED: 'bg-neutral-400',
}
export default function VpsStatusBadge({status} : {status:VpsStatus}) {
  return (
    <span className={`ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] ring-1 ring-inset ${tone[status]}`}>
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {status}
    </span>
  )
}
