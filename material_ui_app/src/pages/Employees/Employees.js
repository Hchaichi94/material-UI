import { makeStyles, Paper } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeesForm from './EmployeesForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}))

export default function Employees() {
    const classes = useStyles()

    return (
        <div>
            <PageHeader title="New Employee" subTitle="Form with validation" icon={<PeopleOutlineIcon fontSize="large" />} />

            <Paper className={classes.pageContent}>
                <EmployeesForm />
            </Paper>
        </div>
    )
}
