$(function () {

    // Add a New Banana //
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBanana = {
            banana_name: $("#newbanana").val().trim(),
            devoured: 0
        };

        // Send the POST Request //
        $.ajax("/bananas", {
            type: "POST",
            data: newBanana
        }).then(function () {
            console.log("Added new banana");
            // Reload the Page to Get the Updated Banana List //
            location.reload();
        });
    });

    $(".eatbanana").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let devouredState = {
            devoured: 1
        };

        // Send the PUT Request //
        $.ajax("/banana/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Banana devoured");
            location.reload();
        });
    });

    $(".trashbanana").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");

        // Send the DELETE Request //
        $.ajax({
            type: "DELETE",
            url: "/banana/" + id
        }).then(location.reload());
    });

});