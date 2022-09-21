const employee = {
    name:"Sam",
    streetAddress:"14 N. Calvert Ave.",
};

function updateEmployeeWithKeyAndValue (obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey (employee, object, key) {
    object = {...employee[key]};
    delete object.key;
    return object;

}

function destructivelyDeleteFromEmployeeByKey (employee, name) {
    delete employee.name;
    return employee;
}