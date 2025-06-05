// HTML Elements
let outputLibrary = document.getElementById('outputLibrary');
let bookNameSelect = document.getElementById("bookNameSelect")


// Checking if there is data in LocalStorage
let library = [];
if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"))
}

let libraryString = "";
for (let i = 0; i < library.length; i++) {
    libraryString += `<li>${library[i].bookName} has ${library[i].loaned ? "been" : "not been"} loaned out, there are ${library[i].bookCount-library[i].loaned} left</li>`;
}
outputLibrary.innerHTML = libraryString;

function registerNewBook() {
    let bookNameInput = document.getElementById('bookName');
    let bookCountInput = document.getElementById('bookCount');
    let isbnInput = document.getElementById('ISBN');
    let bookTypeSelect = document.getElementById('bookType');
    let bookGenreSelect = document.getElementById('bookGenre');

    if (bookNameInput.value == "" || bookCountInput.value == 0 || isbnInput.value == 0) {
        alert("One or more form elements are missing from the page");
    } else {
        // Get all values
        let bookName = bookNameInput.value.trim();
        let bookCount = Number(bookCountInput.value);
        let isbn = Number(isbnInput.value);
        let booktype = bookTypeSelect.value;
        let bookGenre = bookGenreSelect.value;
        let loaned = 0;

        // Emptying out each of the inputs
        bookNameInput.value = "";
        bookCountInput.value = "";
        isbnInput.value = "";
        bookTypeSelect.selectedIndex = 0;
        bookGenreSelect.selectedIndex = 0;

        let book = {
            bookName,
            bookCount,
            isbn,
            booktype,
            bookGenre,
            loaned
        }

        console.log("Book registered:", book)

        // Adding to library, localStorage and displaying library
        library.push(book)
        console.log(library)
        localStorage.setItem("library", JSON.stringify(library))


        libraryString = ""
        for (let i = 0; i < library.length; i++) {
            libraryString += `<li>${library[i].bookName} has ${library[i].loaned ? "been" : "not been"} loaned out, there are ${library[i].bookCount-library[i].loaned} left</li>`;
        }
        outputLibrary.innerHTML = libraryString;
    }
}