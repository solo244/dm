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
      default:
        break;
    }

    $("#contentStuff .dashHeader i").css("color", "rgb(27, 31, 41)");
    $(this).css("color", "rgb(155, 182, 201)");

    $("#contentStuff .innerContent > div").animate({"left" : "600px"}, 500);
    console.log($(".s" + buttonContext));
    $(".s" + buttonContext).animate({"left" : "0px"}, 500);

  });

});
