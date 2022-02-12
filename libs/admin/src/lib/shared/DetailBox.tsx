import styled from 'styled-components'
import { adminFullTheme as theme } from '@msm/ui'

const DetailBox = styled.div`
  min-width: 400px;
  padding-bottom: ${theme.spacing(2)};
  label {
    color: ${theme.palette.text.secondary};
    display: block;
  }
`

export default DetailBox
