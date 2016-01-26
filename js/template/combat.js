$(document).ready(function(){

  $(".dieRollRowLoading").hide();

  $(".dierollWindow .dieRollRow .button").click(function(){
    var theEyes = $(this).html().replace("1d","");
    var rollTheDie = Math.floor((Math.random() * theEyes) + 1);
    var whichRoll = $(this).closest(".dieRollRow").find(".rollResults");
    var slowFeedback = setInterval(function(){ myTimer(); }, 1000);
    $(".dieRollRowLoading").show();

    function myTimer(){
      whichRoll.html(rollTheDie);
      clearInterval(slowFeedback);
    }
  });
});
