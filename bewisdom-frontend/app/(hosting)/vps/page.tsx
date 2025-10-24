import { Vps, VpsStatus } from '@/app/(hosting)/mockdata/mockvps'
import React from 'react'

const MOCK_VPS: Vps[] = [
  {
    id: 1,
    hostname: 'gw-01',
    provider: 'Hetzner',
    region: 'fsn1',
    ipPublic: '88.198.10.11',
    ipPrivate: '10.0.0.2',
    os: 'Ubuntu 24.04',
    cpuCores: 4,
    ramGb: 8,
    storageGb: 160,
    purpose: 'Reverse proxy + TLS offload',
    assignedService: 'Gateway (YARP/Nginx)',
    monthlyCost: 9.9,
    currency: 'EUR',
    status: 'ACTIVE',
    updatedAt: new Date(Date.now() - 3600_000).toISOString(),
    archivedAt: null,
  },
  {
    id: 2,
    hostname: 'auth-01',
    provider: 'Oracle',
    region: 'ap-singapore-1',
    ipPublic: '150.230.10.22',
    ipPrivate: '10.1.0.5',
    os: 'Ubuntu 22.04',
    cpuCores: 2,
    ramGb: 4,
    storageGb: 80,
    purpose: 'Auth-Service .NET 8',
    assignedService: 'Auth-Service',
    monthlyCost: 0,
    currency: 'USD',
    status: 'MAINTENANCE',
    updatedAt: new Date(Date.now() - 10_800_000).toISOString(),
    archivedAt: null,
  },
  {
    id: 3,
    hostname: 'exam-01',
    provider: 'Contabo',
    region: 'SIN1',
    ipPublic: '173.212.40.33',
    ipPrivate: null,
    os: 'Debian 12',
    cpuCores: 6,
    ramGb: 16,
    storageGb: 400,
    purpose: 'Exam-Service API + DB replica',
    assignedService: 'Exam-Service',
    monthlyCost: 12.5,
    currency: 'USD',
    status: 'ACTIVE',
    updatedAt: new Date(Date.now() - 86_400_000).toISOString(),
    archivedAt: null,
  },
  {
    id: 4,
    hostname: 'old-gw-2023',
    provider: 'Hetzner',
    region: 'nbg1',
    ipPublic: '213.239.100.44',
    ipPrivate: '10.9.0.9',
    os: 'Ubuntu 20.04',
    cpuCores: 2,
    ramGb: 4,
    storageGb: 80,
    purpose: 'LEGACY GW',
    assignedService: 'Gateway (old)',
    monthlyCost: 6.2,
    currency: 'EUR',
    status: 'ARCHIVED',
    updatedAt: new Date(Date.now() - 86400_000 * 60).toISOString(),
    archivedAt: new Date(Date.now() - 86400_000 * 30).toISOString(),
  },
  {
    id: 5,
    hostname: 'course-01',
    provider: 'Vultr',
    region: 'SGP',
    ipPublic: '45.76.10.55',
    ipPrivate: '10.3.0.7',
    os: 'Ubuntu 24.04',
    cpuCores: 4,
    ramGb: 8,
    storageGb: 160,
    purpose: 'Course-Service',
    assignedService: 'Course-Service',
    monthlyCost: 14,
    currency: 'USD',
    status: 'ACTIVE',
    updatedAt: new Date(Date.now() - 2_600_000).toISOString(),
    archivedAt: null,
  },
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: 100 + i,
    hostname: `edge-${i.toString().padStart(2, '0')}`,
    provider: i % 2 === 0 ? 'Hetzner' : 'Oracle',
    region: i % 3 === 0 ? 'hel1' : 'ap-singapore-1',
    ipPublic: `203.0.113.${10 + i}`,
    ipPrivate: `10.10.0.${i + 10}`,
    os: 'Ubuntu 24.04',
    cpuCores: 2 + (i % 4),
    ramGb: 4 + (i % 3) * 2,
    storageGb: 80 + (i % 5) * 40,
    purpose: 'Edge cache node',
    assignedService: 'Gateway',
    monthlyCost: 6 + (i % 4) * 2,
    currency: 'USD',
    status: (['ACTIVE', 'MAINTENANCE', 'DOWN'] as VpsStatus[])[i % 3],
    updatedAt: new Date(Date.now() - (i + 1) * 3_600_000).toISOString(),
    archivedAt: null,
  })),
]

export default function VpsPage() {
  
  const rows = MOCK_VPS;
  return (
    <div className='px-3 py-4 mx-3 '>
      <h1 className="text-3xl font-extrabold tracking-tight mt-4 sm:text-3xl">
        VPS Inventory
        <span className="ml-2 align-middle rounded-full bg-white/10 px-2 py-0.5 text-xs text-neutral-300">
          {rows.length} servers
        </span>
      </h1>
      <p className="mt-1 text-sm text-neutral-400">
        Tổng quan máy chủ, trạng thái và thông số.
      </p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div>
          <div className=' relative mt-8 
          mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2
          max-w-7xl auto-rows-fr
          lg:grid-cols-3 items-center justify-center 
          sm:gap-6 px-4
          md:grid-cols-2 xl:grid-cols-3  
          '>
            {MOCK_VPS.map((r, i) => (
              <article key={i}
              className='card group relative p-4 justify-center items-center
              rounded-2xl w-full h-full bg-white/5 backdrop-blur-sm
              transition border border-white/10 shadow-sm ease-out 
              hover:-translate-y-2 hover:shadow-lg
              ring-1 hover:ring-2 hover:ring-white/20
              sm:p-5 lg:p-6
           '
              >       
                <div className='mb-3 h-5 text-xs font-semibold text-sub'>
                  {r.assignedService ?? '\u00A0'}
                </div>        
                <div className='relative w-full'> 
                  <div className='flex items-center gap-2'> 
                    <h2 className='text-lg font-semibold'>
                      {r.hostname}
                    </h2>
                    <span className='mx-auto font-bold flex items-center gap-1'>
                    Status: {r.status}
                    </span>
                  </div>
                </div>
               <div className='mt-1 text-sm text-sub flex items-center gap-2'> 
                <span>{r.provider}</span>
                <span className='opacity-60' ></span >
                <span>{r.region}</span>
               </div>
               
                <div className='relative grid grid-cols-2 mt-3 gap-y-1 text-sm'>
                  <span className='relative text-neutral-500 dark:text-neutral-400'>
                    CPU: <b className='tabular-nums'>{r.cpuCores}</b>
                  </span >
                  <span className='relative text-neutral-500 dark:text-neutral-400'>
                    RAM: <b className='tabular-nums'> {r.ramGb}</b>
                  </span>
                   <span className='relative text-neutral-500 dark:text-neutral-400'>
                    RAM: <b className='tabular-nums'> {r.storageGb}</b>
                  </span>
                  <span className='relative text-neutral-500 dark:text-neutral-400'>
                    OS: <b className='tabular-nums'>{r.os}</b>
                  </span>
                  
                </div>
                   <div className='mt-1 py-2'>
                  <span className='text-sub text-xs '>
                    Last update: {r.updatedAt}
                  </span>
                </div>

                <div className='mt-3 flex flex-wrap items-center gap-2 text-xs text-sub' >
                  {r.ipPublic && (
                    <span className='rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10'> 
                      Public: {r.ipPublic}
                    </span>
                  )}
                </div>
                <div className='mt-3 flex flex-wrap items-center gap-2 text-xs text-sub' >
                  {r.ipPrivate && (
                    <span className='rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10'> 
                      Private: {r.ipPrivate}
                    </span>
                  )}
               
                </div>
               
              </article>
            ))}
          </div>
      </div>
    </div>
  )
}
