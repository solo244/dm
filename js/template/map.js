$(document).ready(function(){

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
  });

  /*
   * Apply classes to all towns
   */
  for(var j=1; j < (numerOfItems+1); j++){
    var theContents = "Btown" + $("#mapSide ul li:nth-child(" + j + ")").html();
    $("#mapSide ul li:nth-child(" + j + ")").prop("id", theContents);
  }
  $(".innerMapRight").prop("class", "innerMapRight scrollPlease");

  $("#mapSide ul li").click(function(){
    var changeCityImage = $(this).prop("id").split("Btown").join("");
    var changeCityId = "#" + $(this).prop("id").split("B").join("");

    switch (changeCityImage){
      case "Deepmere": $(changeCityId).find(".picMap").css("background-position", "0px 0px"); break;
      case "Faredeep": $(changeCityId).find(".picMap").css("background-position", "-342px 0px"); break;
      case "Goldhaven": $(changeCityId).find(".picMap").css("background-position", "-684px 0px"); break;
      case "Highhollow": $(changeCityId).find(".picMap").css("background-position", "-1026px 0px"); break;
      case "Northvale": $(changeCityId).find(".picMap").css("background-position", "-1368px 0px"); break;
      case "Silverfort": $(changeCityId).find(".picMap").css("background-position", "-1710px 0px"); break;
      case "Waterkeep": $(changeCityId).find(".picMap").css("background-position", "-2052px 0px"); break;
      default: break;
    }
  });

  $("#viewTown").click(function(){
    var viewWhich = $(this).parent().find("h2").html();
    var thisNewId = "#town" + viewWhich;
    console.log(thisNewId);
    if($(thisNewId).find(".picMap").css("height") === "261px"){
      $(thisNewId).find(".picMap").animate({"height": "0px"}, 500);
    }else{
      $(thisNewId).find(".picMap").animate({"height": "261px"}, 500);
    }
  });

  /*
   * Show details map
   */
  $("#backMap").hide();
  $("#viewTown").hide();

  $("#mapSide ul li").click(function(){
    var activeTown = "#" + $(this).prop("id").split("B").join("");
    $(activeTown).animate({"left": "0"}, 500);
    var newh2Tag = activeTown.split("town").join("").split("#").join("");
    $("#contentMap h2").html(newh2Tag);
    $("#backMap").show();
    $("#viewTown").show();
  });

  $("#backMap").click(function(){
    $(".innerMap").animate({"left": "600px"}, 500);
    $("#contentMap h2").html("Map");
    $("#backMap").hide();
    $("#viewTown").hide();
  });

  /*
   * Zoom in into the map
   */
  $("#openMap").click(function(){
    $("#theMapOverlay").animate({"width": "1920px"}, 800);
  });

  $("#theMapOverlay button").click(function(){
    $("#theMapOverlay").animate({"width": "0px"}, 800);
  });

});
