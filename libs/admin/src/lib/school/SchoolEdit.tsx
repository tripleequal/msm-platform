import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { School } from './types'

export default function DistictEdit({ values }: FormikProps<School>) {
  return (
    <div>
      <TextField value={values.schoolName} />
    </div>
  )
}
