$(document).ready(function(){

  /*
   * Open the correct quest panel, like a Sir
   */
  var nexMainText = "Quest";
  $("#contentQuests .dashHeader i").click(function(){
    var buttonContext = $(this).prop("id").split("quest").join("").toLowerCase() + "Quests";
    nexMainText = $(this).prop("id").split("quest").join("") + " Quests";

    $("#contentQuests .dashHeader h2").html(nexMainText);

    $("#contentQuests .innerContent > div").animate({"top" : "320px"}, 500);
    $("." + buttonContext).animate({"top" : "50px"}, 500);

    // TODO: fix the show only when sidebar is not visible (of current)
    $(".backQuests").show();
  });

  /*
   * Open some quests from the general variety
   */
  $(".backQuests").hide();
  var activeState;

  $("#allQuests li").click(function(){
    var whatId = $(this).closest(".sidebar").attr("id");

    switch (whatId) { 
      case 'storyMenu': 
        activeState = "#sQuest";
        break;
      case 'generalMenu': 
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
        break;
      default:
    }
    
    var theQuestName = $(this).html();
    var numberInRow = $(this).index() + 1;
    var whatQuestAreWeOn = activeState + numberInRow;

    $("#contentQuests .dashHeader h2").html(theQuestName);
    $(this).closest(".sidebar").animate({"left": "-200px"}, 500);
    $(whatQuestAreWeOn).animate({"left": "0px", "opacity": "1"}, 500);

    $(".backQuests").show();
  })

  $(".backQuests").click(function(){
    $(this).parent().find(".sidebar").animate({"left": "0px"}, 500);
    $(this).parent().find(".gQuest").animate({"left": "200px", "opacity": "0"}, 500);

    $("#contentQuests .dashHeader h2").html(nexMainText);

    $(".backQuests").hide();
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

  /*
   * Adding some carousel buttons
   */
  $('.carousel').each(function(){
    var thisCarousel = $(this).closest(".carousel");

    thisCarousel.find(".img2").after("<div class='carButtonHolder'></div>");
    thisCarousel.find(".carButtonHolder").append("<div class='carimg1 carButton activeButton'></div>");
    thisCarousel.find(".carButtonHolder").append("<div class='carimg2 carButton'></div>");

    thisCarousel.find(".carimg2").css("left", "200");

    $(".carimg1").click(function(){
      thisCarousel.find(".img1").animate({"left": "0"}, 500);
      thisCarousel.find(".carimg1").addClass("activeButton");
      thisCarousel.find(".carimg2").removeClass("activeButton");
      thisCarousel.find(".img2").animate({"left": "200px"}, 500);
    })
    $(".carimg2").click(function(){
      thisCarousel.find(".img1").animate({"left": "200px"}, 500);
      thisCarousel.find(".carimg2").addClass("activeButton");
      thisCarousel.find(".carimg1").removeClass("activeButton");
      thisCarousel.find(".img2").animate({"left": "0"}, 500);
    })
  })
})
