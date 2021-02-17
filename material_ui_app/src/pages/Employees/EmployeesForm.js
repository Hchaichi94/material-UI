import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React from 'react';
import { Form, useForm } from '../../components/useForm';




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
                    <TextField variant="outlined" label="full Name" name="fullName" value={values.fullName} onChange={handleInputChange} />
                    <TextField variant="outlined" label="email" name="email" value={values.email} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name="gender" value={values.gender} onChange={handleInputChange} >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    )
}
