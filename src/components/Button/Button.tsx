/* eslint-disable react/jsx-props-no-spreading */
import styles from './styles.module.css'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'value'
  | 'error'
  | 'warning'
  | 'info'
  | 'option'
  | 'highlight'

export type ButtonVariant = 'contained' | 'outlined' | 'toggle'

export type ButtonTextSize = 'xsmall' | 'small' | 'medium' | 'large'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  active?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  textSize?: ButtonTextSize
}

export const Button: React.FC<ButtonProps> = ({
  active = false,
  children,
  color = 'primary',
  className: parentClassName,
  textSize = 'medium',
  variant = 'contained',
  ...rest
}) => {
  const classNames = [
    styles.button,
    styles[color],
    styles[textSize],
    styles[variant],
    active ? styles.active : styles.inactive,
  ]

  return (
    <button
      {...rest}
      className={`${classNames.join(' ')} ${parentClassName}`}
      type="button"
    >
      {children}
    </button>
  )
}
