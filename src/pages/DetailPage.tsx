import { CenteredWrapper } from '@Components'
import { Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  return (
    <CenteredWrapper>
      <h1>Detail</h1>
      <main>id: {id}</main>

      <p>
        <Button
          onClick={() => {
            navigate(-1)
          }}
          variant="contained"
          size="small"
        >
          Back
        </Button>
      </p>
    </CenteredWrapper>
  )
}
