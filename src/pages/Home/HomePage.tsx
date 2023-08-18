import { Link } from 'react-router-dom'
import reactLogo from '@Assets/react.svg'
import { Button, CenteredWrapper } from '@Components'
import styles from './styles.module.css'

export const HomePage = () => (
  <CenteredWrapper>
    <img src={reactLogo} alt="React logo" className={styles.logo} />
    <h1>Home Page</h1>
    <h1>Vite + React</h1>
    <ul className={styles.links}>
      <li>
        <Link to="/detail/1">
          <Button variant="contained">Goto Detail</Button>
        </Link>
      </li>
      <li>
        <Link className={styles.link} to="/components">
          <Button variant="contained">Components</Button>
        </Link>
      </li>
    </ul>
  </CenteredWrapper>
)
