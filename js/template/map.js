$(document).ready(function(){

  //$(".innerMap").animate({"left": "0px"}, 500);
  /*
   * Check for input input *ha, that's a pun ;)
   */
  var theList = $("#mapSide ul li");
  var numerOfItems = theList.length;

  for(var i=1; i < (numerOfItems+1); i++){
     $("#mapSide ul li:nth-child(" + i + ")").hide();
  }

  $("#mapSide input").keyup(function(){
    var toUse = $(this).val();

    for(var i=1; i < (numerOfItems+1); i++){
      if($("#mapSide ul li:nth-child(" + i + ")").html() === toUse){
        $("#mapSide ul li:nth-child(" + i + ")").show();
      }else{
        $("#mapSide ul li:nth-child(" + i + ")").hide();
      }
    }
  })

  /*
   * Show details map
   */
  $("#backMap").hide();

  $(".townWaterkeep").click(function(){
    var activeTown = "#" + $(this).prop("class");
    $(activeTown).animate({"left": "0"}, 500);
    var newh2Tag = activeTown.split("town").join("").split("#").join("");
    $("#contentMap h2").html(newh2Tag);
    $("#backMap").show();
  })

  $("#backMap").click(function(){
    $(".innerMap").animate({"left": "600px"}, 500);
    $("#contentMap h2").html("Map");
    $("#backMap").hide();
  })
})
