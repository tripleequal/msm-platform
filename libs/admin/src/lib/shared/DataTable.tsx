import { DataGrid, GridColDef, GridRow } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  HTMLAttributes,
  useMemo,
  useState,
  FunctionComponent,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { BaseEntity } from '../types'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import { Formik, FormikProps, Form } from 'formik'

export interface EntityDialogProps<T> {
  entity: T | null | undefined
}

interface DataTableProps<T> {
  data?: T[]
  loading: boolean
  colDefs: GridColDef[]
  DetailView: FunctionComponent<{ entity: T | null | undefined }>
  EditView: FunctionComponent<FormikProps<T>>
}
export default function DataTable<T extends BaseEntity>({
  data,
  colDefs,
  loading,
  DetailView,
  EditView,
}: DataTableProps<T>) {
  const memoizedData = useMemo(() => data ?? [], [data])

  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedEntity, setSelectedEntity] = useState<T | null>(null)

  const openDetail = (entity: T) => {
    setSelectedEntity(entity)
    setDetailDialogOpen(true)
  }

  const openEdit = useCallback((entity: T) => {
    setSelectedEntity(entity)
    setEditDialogOpen(true)
  }, [])

  const memoizedColDefs = useMemo(
    () =>
      colDefs.concat([
        {
          headerName: '',
          field: 'id',
          width: 150,
          renderCell: (cell) => (
            <ActionsCell
              onEditButtonClick={(e) => {
                e.stopPropagation()
                openEdit(cell.row as T)
              }}
            >
              {format(new Date(cell.row.updatedAt), 'MMM do, yyyy')}
            </ActionsCell>
          ),
        },
      ]),
    [colDefs, openEdit]
  )

  const onEditSubmit = () => {
    // TODO
  }

  return (
    <div style={{ flex: 1 }}>
      <StyledDataGrid
        loading={loading}
        isCellEditable={() => false}
        onRowClick={(params) => openDetail(params.row as T)}
        disableSelectionOnClick
        disableColumnSelector
        disableColumnMenu
        rows={memoizedData ?? []}
        columns={memoizedColDefs}
        components={{
          Row: GridRow,
        }}
        pagination
        pageSize={20}
      />
      <Dialog
        open={detailDialogOpen}
        onClose={() => setDetailDialogOpen(false)}
        maxWidth="lg"
      >
        <DialogTitle>District Details</DialogTitle>
        <DialogContent dividers>
          <DetailView entity={selectedEntity} />
        </DialogContent>
        <DialogActions>
          <Typography variant="body2" style={{ fontStyle: 'italic' }}>
            Updated: 04/18/1985
          </Typography>
        </DialogActions>
      </Dialog>
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth="lg"
      >
        <Formik initialValues={selectedEntity as T} onSubmit={onEditSubmit}>
          {(formProps) => (
            <Form>
              <DialogTitle>Edit</DialogTitle>
              <DialogContent dividers>
                <EditView {...formProps} />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setEditDialogOpen(false)}>Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  )
}

const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-row {
    cursor: pointer;

    &:hover {
      .actions-cell {
        .actions-container {
          display: inherit;
        }
        .default-value {
          display: none;
        }
      }
    }
  }

  .actions-cell .actions-container {
    display: none;
  }

  .MuiDataGrid-columnHeader:focus,
  .MuiDataGrid-cell:focus {
    outline: none;
  }
`

interface ActionCellProps {
  onEditButtonClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}
function ActionsCell({
  children,
  onEditButtonClick,
}: HTMLAttributes<HTMLSpanElement> & ActionCellProps) {
  return (
    <StyledActionsCell>
      <span className="default-value">{children}</span>
      <span className="actions-container">
        <IconButton onClick={onEditButtonClick}>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </span>
    </StyledActionsCell>
  )
}

const StyledActionsCell = styled.span.attrs({ className: 'actions-cell' })`
  width: 100%;
  .actions-container {
    text-align: right;
  }
`
