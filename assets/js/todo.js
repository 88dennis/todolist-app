$("ul").on("click", "li", function() {
        // console.log($(this).css("color"))
        // if ($(this).css("color") === "rgb(128, 128, 128)") {
        //     $(this).css("color", "black")
        //     $(this).css("text-decoration", "none")
        // } else {
        //     $(this).css({
        //         color: "gray",
        //         textDecoration: "line-through"
        //     })
        // }
        //TOGGLE CLASS METHOD
        //create a class in CSS
        $(this).toggleClass("completed")
    })
    //delete todos
    //the "on" wil choose the parent element element that are already existing the click on the dynamically created element
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); //this is the parent "li"
    })
    event.stopPropagation();
})

$("input[type='text'").keypress(function(event) {
    if (event.which === 13) {
        console.log($(this).val());
        let todoInput = $(this).val();
        $(this).val("")
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoInput + "</li>")
    }
})

$(".fa-plus").click(function() {
    $("input").toggle()
})