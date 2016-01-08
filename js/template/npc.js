$(document).ready(function(){

  /*
   * Open the correct npc panel, kinda like a Sir
   */
  var nexMainText = "NPC";
  $("#contentNPC .dashHeader i").click(function(){
    var buttonContext = $(this).prop("id").split("npc").join("").toLowerCase() + "NPC";
    nexMainText = $(this).prop("id").split("npc").join("") + " NPC";

    $("#contentNPC .dashHeader h2").html(nexMainText);

    $("#contentNPC .innerContent > div").animate({"top" : "320px"}, 500);
    $("." + buttonContext).animate({"top" : "50px"}, 500);

    // TODO: fix the show only when sidebar is not visible (of current)
    $(".backNPC").show();
  });

  /*
   * Open some quests from the general variety
   */
  $(".backNPC").hide();
  var activeStateNPC;

  $("#allNPCs li").click(function(){
    var whatId = $(this).closest(".sidebar").attr("id");

    switch (whatId) { 
      case 'nalaNPCMenu': 
        activeStateNPC = "#nNPC";
        break;
      /*case 'generalMenu': 
        activeState = "#gQuest";
        break;
      case 'nalaMenu': 
        activeState = "#nQuest";
        break;
      case 'laiMenu': 
        activeState = "#lQuest";
        break;
      case 'thiaMenu': 
        activeState = "#tQuest";
        break;
      case 'ottanMenu': 
        activeState = "#oQuest";
        break;*/
      default:
        console.log("none selected");
    }
    
    var theNPCName = $(this).html();
    var numberInRowNPC = "" + parseInt(($(this).index()) + 1);
    console.log(numberInRowNPC);
    var whatNPCAreWeOn = activeStateNPC + numberInRowNPC;

    $("#contentNPC .dashHeader h2").html(theNPCName);
    $(this).closest(".sidebar").animate({"left": "-200px"}, 500);
    $(whatNPCAreWeOn).animate({"left": "0px", "opacity": "1"}, 500);

    $(".backNPC").show();
  })

  $(".backNPC").click(function(){
    $(this).parent().find(".sidebar").animate({"left": "0px"}, 500);
    $(this).parent().find(".nNPC").animate({"left": "200px", "opacity": "0"}, 500);

    $("#contentNPC .dashHeader h2").html(nexMainText);

    $(".backNPC").hide();
  });

  /*
   * Makes sure the carousel images are scaled and used as cover background
   */
  $('img.toResizeClass').each(function(){
    var $img = $(this);
    var imgWidth = $img.width();
    var imgHeight = $img.height();

    while(imgHeight < 260 || imgWidth < 200){
      imgHeight *= 1.1;
      imgWidth *= 1.1;
      $(this).height(imgHeight);
      $(this).width(imgWidth);
    }
  });
})
