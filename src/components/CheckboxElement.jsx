import React from 'react'
import {Link} from 'react-router-dom'
import {FormControlLabel, Checkbox } from '@mui/material'
const setStart = {display : 'flex' , justifyContent: 'flex-start', alignItems : 'flex-start'};

const CheckboxElement = ({CheckboxLabel, linkname}) => {
  return (
    <div style = {setStart}>
      <FormControlLabel 
        control={
          <Checkbox></Checkbox>
        }
        label ={
          <div>
            <span>
              {CheckboxLabel}
            </span>
            <Link>{linkname}</Link>
          </div>
        }>
      </FormControlLabel>
        
    </div>
  )
}

export default CheckboxElement