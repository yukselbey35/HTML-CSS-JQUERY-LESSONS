/* 
jQuery Syntax
The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).
Basic syntax is: $(selector).action()
A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".
*/

$(document).ready(function(){

    // jQuery methods go here...
    
    $("#hidep").click(function(){
        $("p").hide(); //The jQuery element selector selects elements based on the element name.
      });
    
    $("#hideh2").click(function(){ //The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
        $("h2").hide(); //The jQuery element selector selects elements based on the element name.
      });
    
    $(".changeColor").click(function(){ //The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.
        $("h2").css({ background: "green", color: "black" }); //The jQuery element selector selects elements based on the element name.
      });
    


  
});