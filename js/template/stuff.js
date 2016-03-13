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

    $("#contentStuff .innerContent > div").animate({"left" : "800px"}, 500);
    //console.log($(".s" + buttonContext));
    $(".s" + buttonContext).animate({"left" : "0px"}, 500);

  });

  /*
   * Open some items from the story variety
   */
  $(".backStuff").hide();
  var activeStateStuff;

  $("#storyItemsMenu li").click(function(){

    var whatItem = $(this).html();

    switch (whatItem) {
      case 'Ron The Fierce':
        activeStateStuff = "#ss1";
        break;
      case 'Clarent The Wise':
        activeStateStuff = "#ss2";
        break;
      case 'Mordred The Traitor':
        activeStateStuff = "#ss3";
        break;
      case 'Excalibur The Just':
        activeStateStuff = "#ss4";
        break;
      case 'Dematerialisation Amulet':
        activeStateStuff = "#ss5";
        break;
      case 'Shield Of Dinus':
        activeStateStuff = "#ss6";
        break;
      case 'Shield Of Denbur':
        activeStateStuff = "#ss7";
        break;
      case 'Shield Of Dornir':
        activeStateStuff = "#ss8";
        break;
      default:
        //console.log("none selected");
    }

    var theStuffName = $(this).html();
    var numberInRowStuff = "" + parseInt(($(this).index()) + 1);
    var whatStuffAreWeOn = activeStateStuff + numberInRowStuff;

    console.log("activeStateStuff: " + activeStateStuff + ", numberInRowStuff: " + numberInRowStuff + ", whatStuffAreWeOn: " + whatStuffAreWeOn);

    $("#storyItemsMenu").animate({"left": "-200px"}, 500);
    $(activeStateStuff).animate({"left": "0px"}, 500);

    $(".backStuff").show();
  });

  $(".backStuff").click(function(){
    $("#contentStuff .sidebar").animate({"left": "0px"}, 500);
    $(".sStu").animate({"left": "600px"}, 500);

    $(".backStuff").hide();
  });

});
