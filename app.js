$(document).ready(function () {
    $("#search").on("click", function(event) {
        console.log("clicked");
        // var topics = ["Rottweiler", "Bulldog", "Boston Terrier", "Golden Retriever", "Newfoundland", "Labradoodle", "Great Dane", "Bloodhound"];
        var dogbreed = $("#breed-input-field").val().trim();

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ArrnUSeTmBQ1nq8tmaRirhx1HWuu8GrK&q=" + dogbreed + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log(response)
        });
    });
})