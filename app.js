$( document ).ready(function() {

    var topics = ["Rottweiler", "Bulldog", "Boston Terrier", "Golden Retriever", "Newfoundland", "Labradoodle", "Great Dane", "Bloodhound"]

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dogbreed + "&api_key=QiYJDZ83GQwGYuz6IraIqLK988IyQNEC"
        //Look back at homework for q, limit, and rating

    var dogbreed = $("#breed-input-field").val()
});