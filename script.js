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

    function render() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
    tableBody.innerHTML += `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button onClick="deleteEmployee(${i})">Delete</button></td>
            </tr>
            `;
    }
    //   updateTotalSalary();
    }

    // some sort of render function so we can combine tasks and fire

    // employee table - delete button deleteEmployee(event)
    function deleteEmployee(index) {
    employees.splice(index, 1);
    render();
    }

    // updating the total monthly salary
    // updateTotalSalary()

    // things to keep in mind, if we are doing stretch goal,
    //  we will need to be able to subtract their annual salary's from the total
