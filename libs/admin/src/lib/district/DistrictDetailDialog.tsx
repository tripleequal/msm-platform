import styled from 'styled-components'
import { adminFullTheme as theme } from '@msm/ui'
import { District } from './types'
import { DialogTitle } from '@mui/material'
import { EntityDialogProps } from '../shared/DataTable'

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
      <DatesBox></DatesBox>
    </div>
  )
}

const DetailBox = styled.div`
  min-width: 400px;
  padding-bottom: ${theme.spacing(2)};
  label {
    color: ${theme.palette.text.secondary};
    display: block;
  }
`

const DatesBox = styled.div``
