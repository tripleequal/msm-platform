import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { District } from './types'

export default function DistictEdit({ values }: FormikProps<District>) {
  return (
    <div>
      <TextField value={values.districtName} />
    </div>
  )
}
