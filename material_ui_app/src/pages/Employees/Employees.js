import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import EmployeesForm from './EmployeesForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Employee email' },
    { id: 'mobile', label: 'Employee mobile' },
    { id: 'department', label: 'Employee department' }
]



export default function Employees() {
    const classes = useStyles()
    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const { TblContainer, TbHead, TblPagination, recordsAfterPaginationAndSorting } = useTable(records, headCells)

    return (
        <div>
            <PageHeader title="New Employee" subTitle="Form with validation" icon={<PeopleOutlineIcon fontSize="large" />} />

            <Paper className={classes.pageContent}>
                <EmployeesForm />
                <TblContainer>
                    <TbHead />
                    <TableBody>
                        {recordsAfterPaginationAndSorting().map(item =>

                        (<TableRow key={item.id}>
                            <TableCell>{item.fullName}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.mobile}</TableCell>
                            <TableCell>{item.department}</TableCell>
                        </TableRow>
                        )
                        )}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </div>
    )
}
