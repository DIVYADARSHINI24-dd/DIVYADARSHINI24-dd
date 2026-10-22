const employees = [
  { id: 1, name: "Divyadarshini", department: "Engineering", salary: 50000 },
  { id: 2, name: "Priya", department: "Testing", salary: 45000 },
];

function getEmployeeById(id) {
  return employees.find(employee => employee.id === id);
}

function addEmployee(employee) {
  employees.push(employee);
}

addEmployee({
  id: 3,
  name: "Rahul",
  department: "Development",
  salary: 55000,
});

console.log("All Employees:");
console.log(employees);

console.log("Employee with ID 1:");
console.log(getEmployeeById(1));