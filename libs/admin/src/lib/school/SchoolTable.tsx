import { GridColDef } from '@mui/x-data-grid'
import useData from '../../useData'
import { CreateSchool, School } from './types'
import Page from '../shared/Page/Page'
import DataTable from '../shared/DataTable'
import SchoolDetail from './SchoolDetail'
import SchoolEdit from './SchoolEdit'
import AddEntityButton from '../shared/AddEntityButton'
import SchoolCreate from './SchoolCreate'

export default function SchoolTable() {
  const { data, loading } = useData<School[]>('msmapp_production_schools.json')

  const columns: GridColDef[] = [
    {
      field: 'schoolName',
      headerName: 'School Name',
      minWidth: 200,
    },
    { field: 'districtId', headerName: 'District', flex: 1 },
  ]

  return (
    <Page
      headerText="Schools"
      rightContent={
        <AddEntityButton<CreateSchool>
          buttonText="School"
          CreateForm={SchoolCreate}
          initialFormValues={{
            schoolName: '',
            districtId: 0,
          }}
        />
      }
    >
      <DataTable<School>
        recordName={(school) => school.schoolName}
        colDefs={columns}
        data={data}
        loading={loading}
        DetailView={SchoolDetail}
        EditView={SchoolEdit}
      />
    </Page>
  )
}
