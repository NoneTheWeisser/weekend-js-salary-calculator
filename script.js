// ready to DOM
document.addEventListener("DOMContentLoaded", readyNow);

let employees = [];

function readyNow() {
  console.log("DOM is loaded");
}

function addEmployee(event) {
  event.preventDefault();
  //   form inputs
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const employeeId = document.getElementById("employee-Id").value;
  const title = document.getElementById("title").value;
  const annualSalary = document.getElementById("annual-salary").value;

  // alert if a field is empty
  if (!firstName || !lastName || !employeeId || !title || !annualSalary) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const submittedEmployee = {
    firstName,
    lastName,
    employeeId,
    title,
    annualSalary,
  };
  employees.push(submittedEmployee);

  render();

  //   clear form fields
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("employee-Id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("annual-salary").value = "";
}

// some sort of render function so we can combine tasks and fire
function render() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    // format the annual salary to currency 
    const formattedSalary = Number(employee.annualSalary).toLocaleString("en-US",{
        style:"currency", currency:"USD", minimumFractionDigits: 2, maximumFractionDigits: 2});


    tableBody.innerHTML += `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.title}</td>
                <td>${formattedSalary}</td>
                <td><button onClick="deleteEmployee(${i})">Delete</button></td>
            </tr>
            `;
  }
  updateTotalSalary();
}


// employee table - delete button deleteEmployee()
function deleteEmployee(index) {
  employees.splice(index, 1);
  render();
}

// updating the total monthly salary
function updateTotalSalary() {
  let total = 0;
  for (let employee of employees) {
    const monthlySalary = Number(employee.annualSalary) / 12;
    total += monthlySalary;
  }

  const totalMonthlyElement = document.getElementById("monthly-total");
  totalMonthlyElement.textContent = `Total Monthly: ${total.toLocaleString("en-US",{
        style:"currency", currency:"USD", minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

  highMonthlySalary(total);
}



function highMonthlySalary(total) {
  const monthlyTotalElement = document.getElementById("monthly-total");
  // Looking for high salary
  if (total > 20000) {
    monthlyTotalElement.classList.add("high-monthly-total");
  } else {
    monthlyTotalElement.classList.remove("high-monthly-total");
  }
}