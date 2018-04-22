$(document).ready(function () {
    //Dog breeds variable
    var topics = ["Rottweiler", "Bulldog", "Boston Terrier", "Golden Retriever", "Newfoundland", "Labradoodle", "Great Dane", "Bloodhound"];

    //Function to create buttons from topics array
    function topicsButtons () {
        //empties div so there are no duplicate buttons
        $("#buttons-go-here").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button type='button'>");
            a.addClass("btn btn-default")
            a.addClass("dogbreed");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons-go-here").append(a)
        }
    }

    topicsButtons()

    $("#search").on("click", function(event) {
        console.log("clicked");
        event.preventDefault();
        var dogbreeds = $("#breed-input-field").val().trim();
        topics.push(dogbreeds);
        topicsButtons();
    });

    $(".dogbreed").on("click", function(event) {

        var dogbreeds = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ArrnUSeTmBQ1nq8tmaRirhx1HWuu8GrK&q=" + dogbreeds + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(response)
        });
    })
})