export const getDepartmentCollection = () => ([

    { id: '1', title: 'Dev' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' }

])


const KEYS = {

    employees: 'employeess',
    employeeId: 'employeeId'

}


export function insertEmployee(data) {

    let employeess = getAllEmployees()
    data['id'] = generateEmployeeId()
    employeess.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employeess))

}

export function generateEmployeeId() {

    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')

    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())

    return id

}



export function getAllEmployees() {

    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))

    return JSON.parse(localStorage.getItem(KEYS.employees))
}