import { Grid } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/controls/Controls';
import { Form, useForm } from '../../components/useForm';
import * as employeeService from '../../services/employeeService';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' }
]

const initialFvalues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeesForm(props) {
    const { addOrEdit } = props
    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "this field is required"

        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "email is not valid"

        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 7 ? "" : "min 7 numbers required"

        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "this field is required"

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const { values, setValues, handleInputChange, errors, setErrors, resetForm } = useForm(initialFvalues, true, validate)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm)
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>

                <Grid item xs={6}>
                    <Controls.Input
                        label="full Name" name="fullName"
                        value={values.fullName} onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="email" name="email"
                        value={values.email} onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="mobile" name="mobile"
                        value={values.mobile} onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="city" name="city"
                        value={values.city} onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender" label="Gender" value={values.gender}
                        onChange={handleInputChange} items={genderItems} />

                    <Controls.Select
                        name="departmentId" label="Department" value={values.departmentId}
                        onChange={handleInputChange} options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DataPicker name="hireDate" label="Hire date" value={values.hireDate} onChange={handleInputChange} />
                    <Controls.Checkbox name="isPermanent" label="Permanent Employee" value={values.isPermanent} onChange={handleInputChange} />
                    <div>
                        <Controls.Button text="Submit" type="Submit" />
                        <Controls.Button text="Reset" color="default" onClick={resetForm} />
                    </div>
                </Grid>

            </Grid>
        </Form>
    )
}
