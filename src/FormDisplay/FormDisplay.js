import React, { useState, useEffect } from 'react'
import DynamicForm from '../DynamicForm/DynamicForm'

const FormDisplay = props => {
    console.log('here')
    return (<>
        <DynamicForm
            title={'Dynamic Form Test'}
        />
    </>)
}

export default FormDisplay
