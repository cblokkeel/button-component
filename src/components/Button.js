import MaterialIcon from 'material-icons-react'
import React, { Fragment } from 'react'
import './Button.css'

const Button = ({ variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {
    const classes = `${variant} ${disableShadow ? 'disable-shadow' : ''} ${disabled ? variant === 'text' ? 'disabled-text' : 'disabled' : ''} ${startIcon ? 'start-icon' : ''} ${endIcon ? 'end-icon' : ''} ${size} ${color}`

    return (
      <Fragment>
        <button className={classes}>
          {startIcon ? <MaterialIcon icon={startIcon} color='#fff' size='tiny' /> : ''}
          {disabled ? 'Disabled' : 'Default'}
          {endIcon ? <MaterialIcon icon={endIcon} color='#fff' size='tiny' /> : ''}
        </button>
      </Fragment>
    )
  }

export default Button;