import { DataGrid, GridColDef } from '@mui/x-data-grid'
import useData from '../../../useData'
import Page from '../Page/Page'

const columns: GridColDef[] = [
  { field: 'districtName', headerName: 'District Name', minWidth: 200 },
  { field: 'stateId', headerName: 'State', width: 400 },
  { field: 'domain', headerName: 'Domain', flex: 1 },
]

export interface District {
  id: number
  districtName: string
  stateId: number
  domain: string
  createdAt: string
  updatedAt: string
  isDemo: number
  authId: string | null
  authProvider: string | null
}

export default function DistrictsList() {
  const { data, loading } = useData<District[]>('districts.json')

  return (
    <Page headerText="Districts" loading={loading}>
      <div style={{ flex: 1 }}>
        <DataGrid
          rows={data ?? []}
          columns={columns}
          pagination
          pageSize={20}
        />
      </div>
    </Page>
  )
}
