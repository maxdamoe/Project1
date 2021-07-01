// setup homepage
var mainEl = $("#mainbody")
console.log(mainEl)
homepage()
function homepage(){
    var bookEl = $("<div>");
    var movieEl = $("<div>");
    var senleftEl1 = $("<p>");
    var senrightEl1= $("<p>");
    var senleftEl2 = $("<p>");
    var senrightEl2= $("<p>");
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
    mainEl.append(bookEl);
    bookEl.append(senleftEl1);
    bookEl.append(senleftEl2)
    mainEl.append(movieEl);
    movieEl.append(senrightEl1);
    movieEl.append(senrightEl2)
}