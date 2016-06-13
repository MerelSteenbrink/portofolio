//= require jquery
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function() {
 slide(1)
 slide(2)
 slide(3)
 slide(4)
})


function slide(nr) {
  $(".slide"+nr).click(function(){
    if ($(".toslide"+nr).is(":hidden")) {
      $(".toslide"+nr).show(1000);
      $(".down"+nr).hide();
    }
    else {
      $(".toslide"+nr).hide(1000);
      $(".down"+nr).show();
    }
    $(".slide").removeClass("active");
    $(this).toggleClass('active');
    $(".tab-content").addClass("hidden")
    targetword = $(this).data("target");
    $(targetword).removeClass("hidden");
  })


}

/*$(function(){

  $(".slide1").on("click", function(event){
    // Change active tab
    $(".slide").removeClass("active");
    $(this).toggleClass('active');
    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass("hidden")
    // Show target tab-content (use class="hidden")
    targetword = $(this).data("target");
    $(targetword).removeClass("hidden");
  });

});
*/



/*$(".card").click(function(){
    if ($(".toslide").is(":hidden")) {
      console.log('It is hidden, lets show!');
      $(".toslide").show(1000);
    }
    else {
      console.log('it is shown, lets hide');
      $(".toslide").hide(1000);
    }
  })*/
