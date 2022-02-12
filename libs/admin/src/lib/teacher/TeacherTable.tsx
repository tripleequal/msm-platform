import { GridColDef } from '@mui/x-data-grid'
import useData from '../../useData'
import { CreateTeacher, Teacher } from './types'
import Page from '../shared/Page/Page'
import DataTable from '../shared/DataTable'
import DistrictDetailDialog from './TeacherDetail'
import DistictEdit from './TeacherEdit'
import AddEntityButton from '../shared/AddEntityButton'
import TeacherCreate from './TeacherCreate'

export default function TeacherTable() {
  const { data, loading } = useData<Teacher[]>('teachers.json')

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 200,
      valueGetter(params) {
        return `${params.row.firstName} ${params.row.lastName}`
      },
    },
    { field: 'email', headerName: 'Email', minWidth: 200 },
    { field: 'teacherKey', headerName: 'Key', minWidth: 200 },
    { field: 'districtId', headerName: 'District', flex: 1 },
  ]

  return (
    <Page
      headerText="Teachers"
      rightContent={
        <AddEntityButton<CreateTeacher>
          buttonText="Teacher"
          CreateForm={TeacherCreate}
          initialFormValues={{
            firstName: '',
            lastName: '',
            districtId: 0,
            teacherKey: '',
            email: '',
          }}
        />
      }
    >
      <DataTable<Teacher>
        recordName={(teacher) => `${teacher.firstName} ${teacher.lastName}`}
        colDefs={columns}
        data={data}
        loading={loading}
        DetailView={DistrictDetailDialog}
        EditView={DistictEdit}
      />
    </Page>
  )
}
