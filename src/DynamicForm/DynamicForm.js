import React, { useState, useEffect, Fragment } from 'react'
import { Radio, InputAdornment, Select, InputLabel, FormControl, TextField } from '@material-ui/core'
import styled from 'styled-components'

const DynamicForm = (props) => {
    const {fields, title } = props
    const Header = <FormHeader>{title}</FormHeader> 

    const onKeyPress = event => { if (event.which === 13) { event.preventDefault() } }
    const createForms = () => {
        if(fields) {
            return Object.keys(fields).map(item => {
                return (
                    < Fragment key={item}> 
                        <TextField
                            id={fields[item].field}
                            label={fields[item].fieldName}
                            defaultValue={fields[item].defaultValue}
                        />
                    </ Fragment>
                )
            })
        }
    }
    console.log(props)
    return (
        <Form onKeyPress={onKeyPress}>
            { Header }
            { createForms() }
        </Form>
    )
}

export default DynamicForm



const FormHeader = styled.span`
&& 
{
  font-size: 16px;
  font-weight: 800;
}
`

const Form = styled.form`
&&
{
  position:relative;
  padding-right:16px;
}
`
