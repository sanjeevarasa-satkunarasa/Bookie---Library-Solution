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
    libraryString += `<li>${library[i].bookName} has ${library[i].loaned ? "been" : "not been"} loaned out</li>`;
}
outputLibrary.innerHTML = libraryString;

// Loading in books for registering
let bookNameArray = []
bookNameSelect.innerHTML = ""

library.forEach(book => {
    bookNameArray.push(book.bookName)
});
bookNameArray.sort()

bookNameArray.forEach(book => {
    bookNameSelect.innerHTML += `<option value=${book}>${book}</option>`
});

function borrowBook() {
    let loanedBook = bookNameSelect.value

    for (let i = 0; i < library.length; i++) {

        if (library[i].bookName == loanedBook) {
            if (library[i].loaned) {
                alert("This book has already been loaned out")
            } else {
                library[i].loaned = true
            }
        }
    }

    localStorage.setItem("library", JSON.stringify(library))

    libraryString = ""
    for (let i = 0; i < library.length; i++) {
        libraryString += `<li>${library[i].bookName} has ${library[i].loaned ? "been" : "not been"} loaned out</li>`;
    }
    outputLibrary.innerHTML = libraryString;
}

