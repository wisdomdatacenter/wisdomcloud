export type VpsStatus = 'ACTIVE' | 'MAINTENANCE' | 'ARCHIVED'

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
  currency?: string | null 
  status: VpsStatus
  updatedAt?: string | null 
  archivedAt?: string | null 
}

const statusColor: Record<VpsStatus, string> = {
  ACTIVE: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300',
  MAINTENANCE: 'bg-amber-100 text-amber-700 ring-1 ring-amber-300',
  ARCHIVED: 'bg-zinc-200 text-zinc-700 ring-1 ring-zinc-300',
}