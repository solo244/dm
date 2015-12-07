$(document).ready(function(){

  /*
   * Open some quests from the general variety
   */
  $(".backQuests").hide();

  $("#generalMenu li").click(function(){

    var theQuestName = $(this).html();
    var numberInRow = $(this).index() + 1;
    var whatQuestAreWeOn = "#gQuest" + numberInRow;

    $("#contentQuests .dashHeader h2").html(theQuestName);
    $(this).closest(".sidebar").animate({"left": "-200px"}, 500);
    $(whatQuestAreWeOn).animate({"left": "0px", "opacity": "1"}, 500);

    $(".backQuests").show();
  })

  $(".backQuests").click(function(){
    console.log($(this).parent().prop("class"));
    $(this).parent().find(".sidebar").animate({"left": "0px"}, 500);
    $(this).parent().find(".gQuest").animate({"left": "200px", "opacity": "0"}, 500);

    $(".backQuests").hide();
  });


})
