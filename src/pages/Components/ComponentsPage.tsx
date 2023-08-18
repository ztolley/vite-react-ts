import { Link } from 'react-router-dom'
import { ButtonsSection } from '@Sections'
import commonStyles from '@Styles/common.module.css'
import styles from './styles.module.css'

export const ComponentsPage = () => (
  <div className={styles.wrapper}>
    <Link to="/">Home</Link>
    <h1 className={commonStyles.title}>Components Page</h1>
    <ButtonsSection />
  </div>
)
