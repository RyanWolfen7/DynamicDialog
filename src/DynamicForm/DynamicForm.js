import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const DynamicForm = (props) => {
    const { fields, title, handleChange } = props
    const Header = <FormHeader>{title}</FormHeader>

    const onKeyPress = event => { if (event.which === 13) { event.preventDefault() } }
    const createForms = () => {
        return (<>{fields && Object.keys(fields).map(item => item &&
            < Fragment key={item}>
                <TextField
                    id={fields[item].field}
                    label={fields[item].fieldName}
                    defaultValue={fields[item].defaultValue}
                    onChange={handleChange(fields[item].field)}
                />
            </ Fragment>
        )}</>)
    }
    return (
        <Form onKeyPress={onKeyPress}>
            {Header}
            {createForms()}
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
