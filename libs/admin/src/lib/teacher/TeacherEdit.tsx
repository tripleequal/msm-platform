import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { Teacher } from './types'

export default function DistictEdit({ values }: FormikProps<Teacher>) {
  return (
    <div>
      <TextField value={values.firstName} />
    </div>
  )
}
