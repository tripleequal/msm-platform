import { Teacher } from './types'
import { EntityDialogProps } from '../shared/DataTable'
import DetailBox from '../shared/DetailBox'

export default function TeacherDetail({ entity }: EntityDialogProps<Teacher>) {
  return (
    <div>
      <DetailBox>
        <label>Name</label>
        {entity?.firstName}
      </DetailBox>
    </div>
  )
}
