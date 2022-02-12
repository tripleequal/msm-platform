import { District } from './types'
import { EntityDialogProps } from '../shared/DataTable'
import DetailBox from '../shared/DetailBox'

export default function DistrictDetailDialog({
  entity,
}: EntityDialogProps<District>) {
  return (
    <div>
      <DetailBox>
        <label>Name</label>
        {entity?.districtName}
      </DetailBox>
      <DetailBox>
        <label>State</label>
        {entity?.stateId}
      </DetailBox>
      <DetailBox>
        <label>Domain</label>
        {entity?.domain}
      </DetailBox>
      <DetailBox>
        <label>Is Demo</label>
        {entity?.isDemo}
      </DetailBox>
      <DetailBox>
        <label>Auth ID</label>
        {entity?.authId}
      </DetailBox>
      <DetailBox>
        <label>Auth Provider</label>
        {entity?.authProvider}
      </DetailBox>
    </div>
  )
}
