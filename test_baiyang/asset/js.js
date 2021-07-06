// setup homepage
var mainEl = $("#mainbody")
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
    })

}


function init(){
    mainEl.text("");
}