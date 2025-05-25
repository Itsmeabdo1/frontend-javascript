interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 24,
  location: "San Francisco",
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Header row
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Data rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
