import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { CreateSchool } from './types'

export default function SchoolCreate({ values }: FormikProps<CreateSchool>) {
  return (
    <div>
      <TextField value={values.schoolName} />
    </div>
  )
}
