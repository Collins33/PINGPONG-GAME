$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userinput").val());
    var newArray = [];
    var newerArray = [];
    var printThis = "";
    for (var index = 1; index <= number; index += 1) {
      newArray.push(index)
    };
    for (var indices = 1; indices <= number; indices += 1) {
      if (newArray[indices] % 15 === 0) {
        newArray[indices] = "pingpong"
      } else if (newArray[indices] % 5 === 0) {
        newArray[indices] = "pong"
      } else if (newArray[indices] % 3 === 0) {
        newArray[indices] = "ping"
      }
      newerArray.push(newArray[indices]);
    }
    $("#results").text("");
    for (var i = 0; i <= newArray.length - 1; i += 1) {
      printThis = "<li>" + newArray[i] + "</li>";
      window.scrollTo( 0, 2000 );

      $("#results").append(printThis);

    }


  })
});
