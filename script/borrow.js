// HTML Elements
let bookNameSelect = document.getElementById("bookNameSelect")

// Checking if there is data in LocalStorage
let library = [];
if (localStorage.getItem("library")) {
    library = JSON.parse(localStorage.getItem("library"))
}

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
            library[i].loaned = true
        }
    }

    alert(`${loanedBook} has been sucessfully loaned out!`)
    localStorage.setItem("library", JSON.stringify(library))
}

