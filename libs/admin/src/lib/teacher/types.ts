import { BaseEntity } from '../types'

export interface CreateTeacher {
  firstName: string
  lastName: string
  teacherKey: string
  districtId: number
  email: string
}

export type Teacher = CreateTeacher & BaseEntity
