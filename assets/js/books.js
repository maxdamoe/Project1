const book = localStorage.getItem('bookName')

console.log(book)


var bookData;

function callAPI() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=intitle:' + book + '&key=AIzaSyCo7wVOuq3EvLV2MmDdx0PzEFuvSD7t430')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById('bookPicture').src = data.items[0].volumeInfo.imageLinks.smallThumbnail
            document.getElementById("bookInformation").innerText = data.items[0].searchInfo.textSnippet
            document.getElementsByTagName("p")[1].innerText = data.items[0].volumeInfo.description;
            bookData = data;
        })

}

console.log(bookData)
var imgSRC = callAPI()