import { BaseEntity } from '../types'

export interface CreateDistrict {
  districtName: string
  stateId: number
  domain: string
  isDemo: number
  authId?: string | null
  authProvider?: string | null
}

export type District = CreateDistrict & BaseEntity
