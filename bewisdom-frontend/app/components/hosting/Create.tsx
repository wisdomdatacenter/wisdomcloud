import { Vps } from '@/app/(hosting)/mockdata/mockvps'
import { number } from 'framer-motion'
import React, { useState } from 'react'


type VpsCreate = Omit<Vps, 'id' | 'updatedAt' | 'archivedAt'>
export default function CreateVpModal({open, onClose, onAdd} : {open:boolean,
    onClose: () => void, 
    onAdd: (data: VpsCreate) => void
}) {
  const [form, setForm] = useState<VpsCreate>({
        hostname: '',
    provider: '',
    region: '',
    ipPublic: '',
    ipPrivate: '',
    os: 'Ubuntu 24.04',
    cpuCores: 2,
    ramGb: 4,
    storageGb: 80,
    purpose: '',
    assignedService: '',
    monthlyCost: 0,
    currency: "USD",
    status: "ACTIVE",
  })
  if (!open) return null;
  const update = (k:keyof VpsCreate, v:any) => setForm((s) => ({...s, [k] : v}))
  const submit = (e:React.FormEvent) => {
    e.preventDefault();
    if (!form.hostname || !form.provider || !form.region || !form.ipPublic) return
    onAdd({
      ...form,
      cpuCores: Number(form.cpuCores) | 0,
      ramGb: Number(form.ramGb) | 0,
      storageGb: Number(form.storageGb) | 0,
      monthlyCost: Number(form.monthlyCost) | 0,
      ipPrivate: form.ipPrivate ?? null
    })
  }
  return (
    <div>
      
    </div>
  )
}
