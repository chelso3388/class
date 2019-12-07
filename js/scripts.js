$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var book = $("input:radio[name=book]:checked").val();

    if (book === "fantasy") {
      $("#biography").hide();
      $("mystery").hide();
      $("#fantasy").show();
    } else if (book === "mystery") {
      $("#fantasy").hide();
      $("#biography").hide();
      $("#mystery").show();
    } else {
      $("#fantasy").hide();
      $("#mystery").hide();
      $("#biography").show();
    }
  });
});
