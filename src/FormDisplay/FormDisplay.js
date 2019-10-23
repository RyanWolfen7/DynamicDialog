import React, { useState, useEffect } from 'react'
import DynamicForm from '../DynamicForm/DynamicForm'
import { Schema }from './inputSchema'

const FormDisplay = props => {
    const [form, setForm] = useState({ name: '' , address: { address: '', postcode: '', city: ''} } )
    const schema = Schema(form) // Abstracted for use with redux/API JSON
    const handleChange = name => event => {
        if(name === 'name') setForm({ ...form, [name]: event.target.value})
        if(name === 'address') setForm({...form, address: { ...form.address, [name]: event.target.value } })
    }
    console.log(form)
    return (<>
        <DynamicForm
            title={'Name'}
            fields={schema.name}
            handleChange={handleChange}
        />
        <DynamicForm
            title={'Address'}
            fields={schema.address}
            handleChange={handleChange}
        />
    </>)
}

export default FormDisplay
