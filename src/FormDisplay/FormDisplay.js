import React, { useState, useEffect } from 'react'
import DynamicForm from '../DynamicForm/DynamicForm'
import { Schema }from './inputSchema'

const FormDisplay = props => {
    const [form, setForm] = useState({ name: '' , address: { address: '', postcode: '', city: ''} } )
    const schema = Schema(form) // Abstracted for use with redux/API JSON
    return (<>
        <DynamicForm
            title={'Name'}
            fields={schema.name}
        />
        <DynamicForm
            title={'Address'}
            fields={schema.address}
        />
    </>)
}

export default FormDisplay
