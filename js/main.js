/* var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
}); */

/*js for load more*/
$(document).ready(function () {
  $(".moreBox").slice(0, 3).show();
  if ($(".blogBox:hidden").length != 0) {
    $("#loadMore").show();
  }
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 6).slideDown();
    if ($(".moreBox:hidden").length == 0) {
      $("#loadMore").fadeOut("slow");
    }
  });
});
