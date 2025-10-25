import { Vps, VpsStatus } from '@/app/(hosting)/mockdata/mockvps'
import InventoryHeader from '@/app/components/hosting/InventoryHeader';
import { VpsCard } from '@/app/components/hosting/VpsCard';
import { VpsGrid } from '@/app/components/hosting/VpsGrid';
import VpsIpChips from '@/app/components/hosting/VpsIpChips';
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
    <div className="py-4 mx-auto max-w-screen px-3 sm:px-4 lg:px-6 xl:px-4 2xl:px-0">
      <InventoryHeader total={rows.length} onAdd={() => {/* open modal */}} />
      <VpsGrid>
        {rows.map(r => (
          <VpsCard
            key={r.id}
            r={r}
            onEdit={() => {/* open edit modal(r) */}}
            onDelete={() => {/* confirm & delete(r) */}}
          />
        ))}
      </VpsGrid>
    </div>
  )
}



