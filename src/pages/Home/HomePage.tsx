import { Button } from '@mui/material'

import reactLogo from '@Assets/react.svg'
import viteLogo from '@Assets/vite.svg'
import { CenteredWrapper, Logo, LogoSpin } from '@Components'

export const HomePage = () => (
  <CenteredWrapper>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <Logo src={viteLogo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <LogoSpin src={reactLogo} alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <p>
      <Button href="/detail/1" variant="contained">
        Goto Detail
      </Button>
    </p>
  </CenteredWrapper>
)
