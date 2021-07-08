const book = localStorage.getItem('bookName')

function callBookAPI(){
    var key = "AIzaSyC6kZC2G9aem-wjUxEi4zdIngmHQz8Pq3E";

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + book +"+intitle:"+book+"&key=" + key)
     .then(function(response){
         return response.json();
     }).then(function(response){
         console.log(response)
         console.log(response.items[0].volumeInfo.imageLinks.thumbnail)
         var imglink = response.items[0].volumeInfo.imageLinks.thumbnail;
         document.getElementById("bookPicture").src = imglink;
         var bookdes = response.items[0].volumeInfo.description;
         document.getElementById("booksum").innerText = bookdes;
     })
}

callBookAPI()