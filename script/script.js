// HTML Elements
const outputElement = document.getElementById('outputLibrary');


// Checking if there is data in LocalStorage
let library = [];
if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"))
}

let libraryString = "";
for (let i = 0; i < library.length; i++) {
    libraryString += `<li>${library[i].bookName}</li>`;
}
outputElement.innerHTML = libraryString;


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

        let book = {
            bookName,
            bookCount,
            isbn,
            booktype,
            bookGenre
        }

        console.log("Book registered:", book)

        // Adding to library, localStorage and displaying library
        library.push(book)
        console.log(library)
        localStorage.setItem("library", JSON.stringify(library))

        let libraryString = "";

        for (let i = 0; i < library.length; i++) {
            libraryString += JSON.stringify(library[i]).trim
        }
        outputElement.innerHTML = JSON.stringify(library)
    }
}




