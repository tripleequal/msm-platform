import { BaseEntity } from '../types'

export interface CreateSchool {
  schoolName: string
  districtId: number
}

export type School = CreateSchool & BaseEntity
