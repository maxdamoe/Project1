

let moviesLink = window.location.href

console.log(moviesLink)


// Send the name of book that the user is looking for to the Books.html file. This is done when the user enters the book title, and then clicks the search button.

const bookSearch = document.getElementById("bookSearch")
const bookButton = document.getElementById("bookButton")


bookButton.addEventListener('click', () => storeBookName())

function storeBookName() {

    localStorage.setItem('bookName', bookSearch.value);
    return window.location.assign('./assets/Books.html');    
}


// Send the name of movie that the user is looking for to the Movies.html file. This is done when the user enters the book title, and then clicks the search button.

const movieSearch = document.getElementById('movieSearch')
const movieButton = document.getElementById('movieButton')

movieButton.addEventListener('click', () => storeMovieName())

function storeMovieName() {
    localStorage.setItem('movieName', movieSearch.value);
    return window.location.assign('./assets/Movies.html')
}

