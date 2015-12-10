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

  /*
   * Makes sure the carousel images are scaled and used as cover background
   */
  $('img.toResizeClass').each(function(){
    var $img = $(this);
    var imgWidth = $img.width();
    var imgHeight = $img.height();

    while(imgHeight < 260 || imgWidth < 200){
      console.log(imgHeight);
      imgHeight *= 1.1;
      imgWidth *= 1.1;
      $(this).height(imgHeight);
      $(this).width(imgWidth);
    }
  });

  /*
   * Adding some carousel buttons
   */
  $(".img2").after("<div class='carButtonHolder'></div>");
  $(".carButtonHolder").append("<div id='carimg1' class='carButton'></div>");
  $(".carButtonHolder").append("<div id='carimg2' class='carButton'></div>");

  $("#carimg2").css("left", "200");

  $("#carimg1").click(function(){
    $(".img1").animate({"left": "0"}, 500);
    $(".carimg1").addClass("activeButton");
    $(".carimg2").removeClass("activeButton");
    $(".img2").animate({"left": "200px"}, 500);
  })
  $("#carimg2").click(function(){
    $(".img1").animate({"left": "200px"}, 500);
    $(".carimg2").addClass("activeButton");
    $(".carimg1").removeClass("activeButton");
    $(".img2").animate({"left": "0"}, 500);
  })


})
