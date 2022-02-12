import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { CreateDistrict } from './types'

export default function DistrictCreate({
  values,
}: FormikProps<CreateDistrict>) {
  return (
    <div>
      <TextField value={values.districtName} />
    </div>
  )
}
