$(document).ready(function(){

  /*
   * Open up the correct content
   */
  $("#contentStuff .dashHeader i").click(function(){
    var buttonContext = $(this).prop("id").toLowerCase().replace("stuff","");

    switch (buttonContext){
      case "melee":
        $("#contentStuff .dashHeader h2").html("Melee Weapons");
        break;
      case "ranged":
        $("#contentStuff .dashHeader h2").html("Ranged Weapons");
        break;
      case "armor":
        $("#contentStuff .dashHeader h2").html("Armor");
        break;
      case "potion":
        $("#contentStuff .dashHeader h2").html("Potions");
        break;
      case "story":
        $("#contentStuff .dashHeader h2").html("Story Items");
        break;
      default:
        break;
    }

    $("#contentStuff .dashHeader i").css("color", "rgb(27, 31, 41)");
    $(this).css("color", "rgb(155, 182, 201)");

    $("#contentStuff .innerContent > div").animate({"left" : "600px"}, 500);
    //console.log($(".s" + buttonContext));
    $(".s" + buttonContext).animate({"left" : "0px"}, 500);

  });

  /*
   * Open some quests from the general variety
   */
  $(".backStuff").hide();
  var activeStateNPC;

  $("#storyItemsMenu li").click(function(){
    //console.log($(this).html());
    var whatId = $(this).closest(".sidebar").attr("id");
    //console.log("Teeeusht:" + whatId);
    /*switch (whatId) {
      case 'nalaNPCMenu':
        activeStateStuff = "#ss1";
        break;
      case 'goodNPCMenu':
        activeStateStuff = "#gNPC";
        break;
      case 'badNPCMenu':
        activeStateStuff = "#bNPC";
        break;
      case 'shibukaiNPCMenu':
        activeStateStuff = "#sNPC";
        break;
      case 'randomNPCMenu':
        activeStateStuff = "#rNPC";
        break;
      case 'groupNPCMenu':
        activeStateStuff = "#grNPC";
        break;
      case 'laiNPCMenu':
        activeStateStuff = "#lNPC";
        break;
      case 'thiaNPCMenu':
        activeStateStuff = "#tNPC";
        break;
      case 'ottanNPCMenu':
        activeStateStuff = "#oNPC";
        break;
      default:
        //console.log("none selected");
    }*/

    var theStuffName = $(this).html();
    var numberInRowStuff = "" + parseInt(($(this).index()) + 1);
    var whatStuffAreWeOn = activeStateStuff + numberInRowStuff;

    console.log(whatStuffAreWeOn);

    /*if(whatId === "nalaNPCMenu" || whatId === "laiNPCMenu" || whatId === "thiaNPCMenu" || whatId === "ottanNPCMenu"){
      $(this).closest(".sidebar").animate({"left": "0px"}, 500);
    }else{
      $(this).closest(".sidebar").animate({"left": "-200px"}, 500);
    }
    $("#contentNPC .dashHeader h2").html(theNPCName);
    //$(this).closest(".sidebar").animate({"left": "-200px"}, 500);
    $(whatNPCAreWeOn).animate({"left": "0px", "opacity": "1"}, 500);
*/
    $(".backStuff").show();
  });

});
