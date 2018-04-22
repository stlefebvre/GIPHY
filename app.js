$(document).ready(function () {
    //Dog breeds variable
    var topics = ["Rottweiler", "Bulldog", "Boston Terrier", "Golden Retriever", "Newfoundland", "Labradoodle", "Great Dane", "Bloodhound"];

    //Function to create buttons from topics array
    function topicsButtons () {
        //empties div so there are no duplicate buttons
        $("#buttons-go-here").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button type='button'>");
            a.addClass("btn btn-default");
            a.addClass("dogbreed")
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

    //This method makes it so JS-rendered search results are clickable through to the AJAX call
    $("body").on("click", ".dogbreed", function(event) {
        console.log("dog button clicked");

        var dogbreeds = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ArrnUSeTmBQ1nq8tmaRirhx1HWuu8GrK&q=" + dogbreeds + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i <results.length; i++) {
                var dogGifDiv = $("<div class='dogGifDiv'>");
                var rating = results [i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var dogImage = $("<img>");
                dogImage.attr("src", results[i].images.fixed_height.url);
                dogGifDiv.prepend(p);
                dogGifDiv.prepend(dogImage);
                $("#gifs-go-here").prepend(dogGifDiv);
            }
        });
    });
});