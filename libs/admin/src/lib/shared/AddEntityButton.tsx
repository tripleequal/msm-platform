import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { FunctionComponent, useState } from 'react'
import { Formik, FormikProps, Form } from 'formik'

interface Props<T> {
  buttonText: string
  initialFormValues: T
  CreateForm: FunctionComponent<FormikProps<T>>
}

export default function AddEntityButton<T>({
  buttonText,
  initialFormValues,
  CreateForm,
}: Props<T>) {
  const [newDialogOpen, setNewDialogOpen] = useState(false)

  const onSubmit = () => {
    // TODO
  }

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setNewDialogOpen(true)}
      >
        {buttonText}
      </Button>
      <Dialog
        open={newDialogOpen}
        onClose={() => setNewDialogOpen(false)}
        maxWidth="lg"
      >
        <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
          {(formProps) => (
            <Form>
              <DialogTitle>Create {buttonText}</DialogTitle>
              <DialogContent dividers>
                <CreateForm {...formProps} />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setNewDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => setNewDialogOpen(false)}>Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  )
}
