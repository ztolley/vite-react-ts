import { useParams, useNavigate } from 'react-router-dom'
import { Button, CenteredWrapper } from '@Components'

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
          textSize="small"
        >
          Back
        </Button>
      </p>
    </CenteredWrapper>
  )
}
