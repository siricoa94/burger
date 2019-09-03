// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newdevour");

    var newSleepState = {
      devoured: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});


// $("#savebutton").on("click", function(event) {
//     console.log("this was clicked");
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newburger = {
//       title: $("#burgerTitle")
//         .val()
//         .trim(),
//       body: $("#burgerText")
//         .val()
//         .trim()
//     };
//     console.log(newburger);
//     console.log("this is the new burger")

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newburger
//     }).then(function() {
//       console.log("created new burger");
//       // Reload the page to get the updated list
//       location.reload();
//     });
// });

// $.ajax("/data", {
//     type: "GET"
// }).then(function(data) {
//     var burgerTitle = $("#burgerTitle");
//     var burgerBody = $("#burgerText");
//     console.log(burgerTitle);
//     console.log(burgerBody);
//     console.log(data)

//     var burgers = data.burgers;
//     var len = burgers.length;

//     for (var i = 0; i < len; i++) {
//     var new_elem =
//         "<li>" +
//         burgers[i].id + 
//         ". " + "<p>" + burgers[i].title + "</p>" + "<p>" + burgers[i].body + "</p>" +
//         "<button class='delete-cat' data-id='" +
//         burgers[i].id +
//         "'>DELETE!</button></li>";
//         $("#burgerView").append(new_elem)
//     }
    
// });
// $(document).on("click", ".delete-cat", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE"
//     }).then(function() {
//       console.log("deleted cat", id);
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });