//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

	  if (title === "" || author === "" || isbn === "") {
    alert("Please fill in all fields");
    return;

		   const tr = document.createElement("tr");

  // Add cells
  tr.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

		    document.getElementById("book-list").appendChild(tr);

  // Clear input fields
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
});

// Event delegation for deleting rows
document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove(); // remove the row
  }
});
  