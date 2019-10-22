import React, { useState, useEffect } from 'react'
import { Radio, InputAdornment, Select, InputLabel, FormControl } from '@material-ui/core'
import styled from 'styled-components'

const DynamicForm = (props) => {
    const onKeyPress = event => { if (event.which === 13) { event.preventDefault() } }

    return (
        <Form onKeyPress={onKeyPress}>
            { Header(props.title) }
        </Form>
    )
}

export default DynamicForm

const Header = title => {
    return (<>
        <FormHeader>{title}</FormHeader>
    </>)
}

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