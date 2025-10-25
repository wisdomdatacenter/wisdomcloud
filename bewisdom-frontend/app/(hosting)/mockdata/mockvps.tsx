export type VpsStatus = 'ACTIVE' | 'MAINTENANCE' | 'ARCHIVED'
export type Currency = 'USD' | 'VND'
export interface Vps {
  id: number
  hostname: string
  provider?: string | null
  region?: string | null
  ipPublic?: string | null
  ipPrivate?: string | null
  os?: string | null
  cpuCores?: number | null
  ramGb?: number | null
  storageGb?: number | null
  purpose?: string | null
  assignedService?: string | null
  monthlyCost?: number | null
  currency?: Currency | null 
  status: VpsStatus
  updatedAt?: string | null 
  archivedAt?: string | null 
}

const statusColor: Record<VpsStatus, string> = {
  ACTIVE: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300',
  MAINTENANCE: 'bg-amber-100 text-amber-700 ring-1 ring-amber-300',
  ARCHIVED: 'bg-zinc-200 text-zinc-700 ring-1 ring-zinc-300',
}
export const MOCK_VPS: Vps[] = [
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
    currency: 'VND',
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
    currency: "USD",
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
  }
]