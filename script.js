document.getElementById("submit").addEventListener("click", function () {
  // Get values from input fields
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  // Validate fields
  if (!title || !author || !isbn) {
    alert("Please fill all fields");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  // Set the row's HTML
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  // Append the row to the book list
  document.getElementById("book-list").appendChild(row);

  // Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Handle deleting rows using event delegation
document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
