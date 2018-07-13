const createTableButton = document.getElementById("createTableButton");

const createTable = ()=>{
    const tableEl = document.querySelector('table');

    const headerRow = tableEl.createTHead().insertRow();
    headerRow.insertCell().textContent = 'Make';
    headerRow.insertCell().textContent = 'Model';
    headerRow.insertCell().textContent = 'Color';

    const newRow = tableEl.insertRow();
    newRow.insertCell().textContent = 'Yes';
    newRow.insertCell().textContent = 'No';
    newRow.insertCell().textContent = 'Thank you';
}

createTableButton.addEventListener("click", createTable, false);