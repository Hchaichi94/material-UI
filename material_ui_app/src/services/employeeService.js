export const getDepartmentCollection = () => ([

    { id: '1', title: 'Dev' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' }

])


const KEYS = {

    employees: 'employees',
    employeeId: 'employeeId'

}


export function insertEmployee(data) {

    let employees = getAllEmployees()
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))

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

    const employees = JSON.parse(localStorage.getItem(KEYS.employees))
    const deparments = getDepartmentCollection()

    return employees.map(emp => ({
        ...emp,
        department: deparments[emp.departmentId - 1].title
    }))

}