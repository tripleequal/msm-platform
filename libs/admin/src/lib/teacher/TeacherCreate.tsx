import { TextField } from '@mui/material'
import { FormikProps } from 'formik'
import { CreateTeacher } from './types'

export default function TeacherCreate({ values }: FormikProps<CreateTeacher>) {
  return (
    <div>
      <TextField value={values.firstName} />
    </div>
  )
}
