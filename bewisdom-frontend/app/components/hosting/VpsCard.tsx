import { Vps } from '@/app/(hosting)/mockdata/mockvps';
import VpsActions from '@/app/components/hosting/VpsActions';
import VpsIpChips from '@/app/components/hosting/VpsIpChips';
import { VpsSpecGrid } from '@/app/components/hosting/VpsSpecGrid';
import VpsStatusBadge from '@/app/components/hosting/VpsStatusBadge';
import React from 'react'

export function VpsCard({ r, onEdit, onDelete }: { r: Vps; onEdit: () => void; onDelete: () => void }) {
  return (
    <article className='card group relative flex flex-col p-4 sm:p-5 lg:p-6 rounded-2xl w-full h-full
                 border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm
                 transition ease-out hover:-translate-1 hover:shadow-xl
                 ring-1 hover:ring-2 hover:ring-white/20 
    '>
      <div className='mb-3 h-5 text-xs font-semibold text-sub' >
        {r.assignedService ?? ""}
      </div>

      <div className='relative w-full'>
        <div className='flex items-center gap-2 min-w-0'> 
          <h2 className='text-base sm:text-lg font-semibold truncate' title={r.hostname}>{r.hostname}
          </h2>
          <VpsStatusBadge status={r.status}/>
        </div>
        <div className='mt-1 text-xs sm:text-sm text-sub flex items-center gap-2'>
          <span>{r.provider}</span><span className="opacity-60">•</span><span>{r.region}</span>
        </div>
        <VpsSpecGrid cpu={r.cpuCores ?? 0} ram={r.ramGb ?? 0} storage={r.storageGb ?? 0} os={r.os ?? ""}/>
      </div>
      <div className='mt-1 py-2'>
        <span className='text-sub text-xs'>Last update: {r.updatedAt}</span>
      </div>
      <VpsIpChips ipPrivate={r.ipPrivate ?? ""} ipPublic={r.ipPublic ?? ""} />
      <VpsActions onUpdate={() => null} onDelete={ () => null}/>
    </article>
  )
}
