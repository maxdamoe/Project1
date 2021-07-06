// //---------------------- MOVIE -------------------------//
// var API_KEY = '702a6c7e';
// var url = 'http://www.omdbapi.com/?i=tt3896198&apikey=702a6c7e';

// // Selecting elements from the DOM
// const searchElement = document.getElementById('movieSearch');
// const buttonElement = document.getElementById('movieButton');
// const movieThumnail = document.getElementById('moviePicture');
// const movieInfo = document.getElementById('movieInformation');
// const movieSummary = document.getElementById('movieSummary');
// const movieGlance = document.getElementById('movieglance');

// buttonElement.addEventListener('click', function(event)
// {
//     event.preventDefault();
//     //console.log(event);
//     var value = searchElement.value;

//     var newUrl = url + '&query=' + value;

//     fetch(newUrl)
//     .then(function(response) 
//     {
//         return response.json();
//     })
//     .then(function(data)
//     {
//         console.log('Data: ', data);
//         return data;
//     })
//     .catch(function(error)
//     {
//         console.log('Erro: ', error);
//     });
//     //console.log('Value: ', value);
// });


// // $(document).ready(function()
// // {
// //     $('#movieButton').submit(function(event)
// //     {
// //         event.preventDefault();
        

// //         var API_KEY = '702a6c7e';
// //         var movie = $('#movieSearch').val();
// //         var result = "";
// //         var url = 'http://www.omdbapi.com/?i=tt3896198&apikey='+API_KEY;

// //         $.ajax(
// //         {
// //            method:'GET',
// //            url: url+"&t="+movie,
// //            success: function(data)
// //            {
// //                console.log(data);
// //            }
// //         });
// //     })
// // });

// // ------------------------ MOVIE DONE -------------------------------------------------//





// Send the name of book that the user is looking for to the Books.html file. This is done when the user enters the book title, and then clicks the search button.

const bookSearch = document.getElementById("bookSearch")
const bookButton = document.getElementById("bookButton")


bookButton.addEventListener('click', () => storeBookName())

function storeBookName() {

    localStorage.setItem('bookName', bookSearch.value);
    return window.location.assign('file:///C:/Users/maxsi/Desktop/Coding/Project1/assets/Books.html');    
}


// Send the name of movie that the user is looking for to the Movies.html file. This is done when the user enters the book title, and then clicks the search button.

const movieSearch = document.getElementById('movieSearch')
const movieButton = document.getElementById('movieButton')

movieButton.addEventListener('click', () => storeMovieName())

function storeMovieName() {
    localStorage.setItem('movieName', movieSearch.value);
    return window.location.assign('file:///C:/Users/maxsi/Desktop/Coding/Project1/Assets/Movies.html')
}

