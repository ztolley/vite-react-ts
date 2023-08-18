import styles from './styles.module.css'

export const CenteredWrapper: React.FC<{
  children?: React.ReactNode
  className?: string
}> = ({ children, className, ...rest }) => (
  <div className={`${className} ${styles.wrapper}`} {...rest}>
    {children}
  </div>
)
