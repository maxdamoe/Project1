const book = localStorage.getItem('bookName');
var mainEl = $("#main");
var key = "AIzaSyC6kZC2G9aem-wjUxEi4zdIngmHQz8Pq3E";
booklist()


function callBookAPI(){
    fetch("https://www.googleapis.com/books/v1/volumes?q="+ book +"+intitle:"+book+"&key=" + key)
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



function booklist(){
    init();
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
        var textbox = [];
        var text = [];
        for (let i =0 ; i<=9; i++){
            booklist[i] = response.items[i].volumeInfo.imageLinks.thumbnail;
            bookimgs[i] = $("<img>");
            bookimgs[i].attr("src",booklist[i]);
            bookimgs[i].attr("class","bookimg");
            bookimgs[i].attr("style","padding:2%");
            bookbox[i] = $("<div>");
            bookbox[i].attr("class","bookbox")
            bookcontainer.append(bookbox[i]);
            bookbox[i].append(bookimgs[i]);
            textbox[i] = $("<div>");
            text[i] = $("<div>");
            text[i].text(response.items[i].volumeInfo.title)
            textbox[i].attr("class","middle");
            text[i].attr("class","booktitle");
            bookbox[i].append(textbox[i]);
            textbox[i].append(text[i]);
            bookbox[i].on("click",function(event){
                event.preventDefault();
                init();
                bookSc(i)
            })
            console.log(response.items)
        }
    })

}


function bookSc(index){
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
        return window.location.assign('../index.html');   
       })



    })

}



function init(){
    mainEl.text("");
}