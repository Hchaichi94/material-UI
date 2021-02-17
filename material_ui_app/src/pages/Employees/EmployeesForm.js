import { Grid } from '@material-ui/core';
import React from 'react';
import Controls from '../../components/controls/Controls';
import { Form, useForm } from '../../components/useForm';

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

export default function EmployeesForm() {



    const { values, setValues, handleInputChange } = useForm(initialFvalues)


    return (
        <Form>
            <Grid container>

                <Grid item xs={6}>
                    <Controls.Input label="full Name" name="fullName" value={values.fullName} onChange={handleInputChange} />
                    <Controls.Input label="email" name="email" value={values.email} onChange={handleInputChange} />
                </Grid>

                <Grid item xs={6}>
                    <Controls.RadioGroup name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={genderItems} />
                </Grid>

            </Grid>
        </Form>
    )
}
