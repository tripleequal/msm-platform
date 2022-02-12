import { GridColDef } from '@mui/x-data-grid'
import useData from '../../useData'
import { CreateDistrict, District } from './types'
import Page from '../shared/Page/Page'
import DataTable from '../shared/DataTable'
import DistrictDetailDialog from './DistrictDetailDialog'
import DistictEdit from './DistrictEdit'
import AddEntityButton from '../shared/AddEntityButton'
import DistrictCreate from './DistrictCreate'

export default function DistrictTable() {
  const { data, loading } = useData<District[]>('districts.json')

  const columns: GridColDef[] = [
    {
      field: 'districtName',
      headerName: 'District Name',
      minWidth: 200,
    },
    { field: 'stateId', headerName: 'State', width: 400 },
    { field: 'domain', headerName: 'Domain', flex: 1 },
  ]

  return (
    <Page
      headerText="Districts"
      rightContent={
        <AddEntityButton<CreateDistrict>
          buttonText="District"
          CreateForm={DistrictCreate}
          initialFormValues={{
            districtName: '',
            stateId: 0,
            domain: '',
            isDemo: 0,
          }}
        />
      }
    >
      <DataTable<District>
        recordName={(district) => district.districtName}
        colDefs={columns}
        data={data}
        loading={loading}
        DetailView={DistrictDetailDialog}
        EditView={DistictEdit}
      />
    </Page>
  )
}
