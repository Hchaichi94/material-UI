import { makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@material-ui/icons';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useState } from 'react';
import Controls from '../../components/controls/Controls';
import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import EmployeesForm from './EmployeesForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    searchInput: {
        width: '75%'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Employee email' },
    { id: 'mobile', label: 'Employee mobile' },
    { id: 'department', label: 'Employee department', disableSorting: true }
]



export default function Employees() {

    const classes = useStyles()
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [firlterFn, setFirlterFn] = useState({ fn: items => { return items } })
    const { TblContainer, TbHead, TblPagination, recordsAfterPaginationAndSorting } = useTable(records, headCells, firlterFn)

    const handleSearch = (e) => {
        let target = e.target
        setFirlterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(i => i.fullName.toLowerCase().includes(target.value))
            }
        })
    }


    return (
        <div>
            <PageHeader title="New Employee" subTitle="Form with validation" icon={<PeopleOutlineIcon fontSize="large" />} />

            <Paper className={classes.pageContent}>
                <EmployeesForm />
                <Toolbar>

                    <Controls.Input
                        className={classes.searchInput}
                        label="Search Employees"
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
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
