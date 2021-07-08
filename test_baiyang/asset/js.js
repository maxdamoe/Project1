// setup homepage
var mainEl = $("#mainbody")
var key = "AIzaSyC6kZC2G9aem-wjUxEi4zdIngmHQz8Pq3E";
console.log(mainEl)
homepage()
function homepage(){
    var bookEl = $("<div>");
    var movieEl = $("<div>");
    var bookbtn = $("<button>");
    var moviebtn = $("<button>");
    var bookinput = $("<input>");
    var movieinput = $("<input>");
    var senleftEl1 = $("<p>");
    var senrightEl1= $("<p>");
    var senleftEl2 = $("<p>");
    var senrightEl2= $("<p>");


    //left and right images
    senleftEl1.text("A cup of coffee and ")
    senrightEl1.text(" a sofa")
    senleftEl2.text("to enjoy ");
    senrightEl2.text(" the relaxing time with")
    senrightEl1.attr("class","senr");
    senleftEl1.attr("class","senl");
    senrightEl2.attr("class","senr2");
    senleftEl2.attr("class","senl2");
    bookEl.attr("class","left");
    bookEl.attr("id","bookleft");
    movieEl.attr("class","right");
    movieEl.attr("id","movieright")
    //left and right buttons

    bookbtn.attr("class","btn");
    bookbtn.text("Find");
    bookbtn.attr("id","findbook");
    bookinput.attr("id","bookinput");
    bookinput.attr("class","inputarea")
    bookinput.attr("placeholder","A book");
    var booksearch = $("<div>");
    booksearch.attr("id","booksearch");



    moviebtn.attr("class","btn");
    moviebtn.text("Find");
    movieinput.attr("id","movieinput");
    movieinput.attr("class","inputarea");
    movieinput.attr("placeholder","A movie");
    var moviesearch = $("<div>");
    moviesearch.attr("id","moviesearch");


    mainEl.append(bookEl);
    bookEl.append(senleftEl1);
    bookEl.append(senleftEl2)
    mainEl.append(movieEl);
    movieEl.append(senrightEl1);
    movieEl.append(senrightEl2);

    bookEl.append(booksearch);
    booksearch.append(bookinput);
    booksearch.append(bookbtn);

    movieEl.append(moviesearch);
    moviesearch.append(movieinput);
    moviesearch.append(moviebtn);


    // bookbtn.on("click",init())
    bookbtn.on("click",function(event){
        event.preventDefault();
        init();
        var book = bookinput.val();
        booklist(book);
    })

    moviebtn.one("click",function(event){
        event.preventDefault();
        init();
        var movie = movieinput.val();
        movieSc(movie);
    })
}

function bookSc(book,index){
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + book +"+intitle:"+book+"&key=" + key)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
       var book1info = response.items[index].volumeInfo;
       var book1img = book1info.imageLinks.thumbnail;
       var author = book1info.authors;
       var description = book1info.description;
       
       var bkleft = $("<div>");
       var bkright = $("<div>");
       var bkimg = $("<img>");
       var bkauthor = $("<p>");
       var bkhead = $("<h2>");
       var bkdescrip = $("<p>");
       var homebtn = $("<button>");
       bkleft.attr("class","page2l");
       bkleft.attr("id","bkleft");
       bkright.attr("class","page2r");
       bkimg.attr("src",book1img);
       bkimg.attr("style","height:600px;width:300px");
       bkauthor.text("Authors: " + JSON.stringify(author));
       bkauthor.attr("style","color:black");
       bkhead.text("Description")
       bkdescrip.text(description);
       homebtn.text("Return");

       mainEl.append(bkleft);
       mainEl.append(bkright);
       bkleft.append(bkimg);
       bkleft.append(bkauthor);
       bkright.append(bkhead);
       bkright.append(bkdescrip);
       bkright.append(homebtn)

       homebtn.on("click",function(event){
        event.preventDefault();
        init();
        homepage();
       })



    })

}

function booklist(book){
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + book +"+intitle:"+book+"&key=" + key)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        var bookcontainer = $("<div>");
        mainEl.append(bookcontainer);
        bookcontainer.attr("id","bookcontainer");
        var booklist = [];
        var bookbox = [];
        var bookimgs = [];
        for (let i =0 ; i<=10; i++){
            booklist[i] = response.items[i].volumeInfo.imageLinks.thumbnail;
            bookimgs[i] = $("<img>");
            bookimgs[i].attr("src",booklist[i]);
            bookimgs[i].attr("style","height:300px ; width:auto")
            bookbox[i] = $("<div>");
            bookbox[i].attr("class","bookbox")
            bookcontainer.append(bookbox[i]);
            bookbox[i].append(bookimgs[i]);
            bookimgs[i].on("click",function(event){
                event.preventDefault();
                init();
                bookSc(book,i)

            })
            console.log(response.items)
        }
    })

}


function init(){
    mainEl.text("");
}





function movieSc(movie){
    fetch("http://www.omdbapi.com/?apikey=557652bb&t="+ movie)
.then(function(response){
    return response.json()
})
.then(function(response){
    var movieimg = response.Poster;
    var movieactor = response.Actors;
    var movieplot = response.Plot
    
    var mvleft = $("<div>");
    var mvright = $("<div>");
    var mvimg = $("<img>");
    var mvactor = $("<p>");
    var mvhead = $("<h2>");
    var mvplot = $("<p>");
    var homebtn = $("<button>");
    mvleft.attr("class","page2l");
    mvright.attr("class","page2r");
    mvimg.attr("src",movieimg);
    mvimg.attr("style","height:600px;width:300px");
    mvactor.text("Actors: "+ JSON.stringify(movieactor));
    mvhead.text("Introduction");
    mvplot.text(movieplot);
    homebtn.text("Return");

    mainEl.append(mvleft);
    mainEl.append(mvright);
    mvleft.append(mvimg);
    mvleft.append(mvactor);
    mvright.append(mvhead);
    mvright.append(mvplot);
    mvright.append(homebtn);

    homebtn.on("click",function(event){
        event.preventDefault();
        init();
        homepage();
       })

})
}




