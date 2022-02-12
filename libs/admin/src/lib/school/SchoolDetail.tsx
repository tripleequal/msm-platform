import { School } from './types'
import { EntityDialogProps } from '../shared/DataTable'
import DetailBox from '../shared/DetailBox'

export default function SchoolDetail({ entity }: EntityDialogProps<School>) {
  return (
    <div>
      <DetailBox>
        <label>Name</label>
        {entity?.schoolName}
      </DetailBox>
    </div>
  )
}
