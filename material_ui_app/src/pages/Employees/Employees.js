import { makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { EditOutlined, Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { useState } from 'react';
import Controls from '../../components/controls/Controls';
import PageHeader from '../../components/PageHeader';
import PopUp from '../../components/PopUp';
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
    },
    newButton: {
        position: "absolute",
        right: '10px'
    }
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Employee email' },
    { id: 'mobile', label: 'Employee mobile' },
    { id: 'department', label: 'Employee department', disableSorting: true },
    { id: 'actions', label: 'Actions' }
]



export default function Employees() {

    const classes = useStyles()
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [firlterFn, setFirlterFn] = useState({ fn: items => { return items } })
    const { TblContainer, TbHead, TblPagination, recordsAfterPaginationAndSorting } = useTable(records, headCells, firlterFn)
    const [openPopup, setOpenPopup] = useState(false)




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

    const addOrEdit = (employee, resetForm) => {
        employeeService.insertEmployee(employee)
        resetForm()
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    return (
        <div>
            <PageHeader title="New Employee" subTitle="Form with validation" icon={<PeopleOutlineIcon fontSize="large" />} />

            <Paper className={classes.pageContent}>

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
                    <Controls.Button
                        className={classes.newButton}
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => setOpenPopup(true)}
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
                            <TableCell>
                                <Controls.ActionButton color="primary">
                                    <EditOutlined fontSize="small" />
                                </Controls.ActionButton>
                                <Controls.ActionButton color="secondary">
                                    <EditOutlined fontSize="small" />
                                </Controls.ActionButton>
                            </TableCell>
                        </TableRow>
                        )
                        )}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup} title="Employee Form" >
                <EmployeesForm addOrEdit={addOrEdit} />
            </PopUp>
        </div>
    )
}
