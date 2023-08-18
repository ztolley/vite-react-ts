/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
import { useState } from 'react'
import { Button, ButtonColor, ButtonTextSize, ButtonVariant } from '@Components'
import styles from './styles.module.css'

const types: ButtonColor[] = [
  'primary',
  'secondary',
  'success',
  'value',
  'error',
  'warning',
  'info',
  'option',
  'highlight',
]
const variants: ButtonVariant[] = ['contained', 'outlined']
const textSizes: ButtonTextSize[] = ['xsmall', 'small', 'medium', 'large']

export const ButtonsSection = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div className={styles.wrapper}>
      <h2>Buttons</h2>

      {textSizes.map((textSize) =>
        variants.map((variant) => (
          <div key={textSize + variant} className={styles.buttonContainer}>
            {types.map((type) => (
              <Button
                key={textSize + variant + type}
                onClick={() => {}}
                color={type}
                textSize={textSize}
                variant={variant}
              >
                {type}
              </Button>
            ))}
          </div>
        ))
      )}

      <div className={styles.buttonContainer}>
        {types.map((type) => (
          <Button
            key={`${type}toggle`}
            onClick={() => {}}
            color={type}
            active={toggle}
            onClickCapture={() => setToggle(!toggle)}
            variant="toggle"
          >
            {type}
          </Button>
        ))}
      </div>
    </div>
  )
}
