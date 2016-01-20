$(document).ready(function(){

  /*
   * Open up the right menu
   */
  $("#contentTreasure .dashHeader i").click(function(){
    var buttonContext = $(this).prop("id").split("gen").join("").toLowerCase().replace("gen","");
    var nexMainTextGen = buttonContext + "Generator";

    switch (nexMainTextGen){
      case "treasureGenerator":
        $("#contentTreasure .dashHeader h2").html("Treasure Generator");
        break;
      case "npcGenerator":
        $("#contentTreasure .dashHeader h2").html("NPC Generator");
        break;
      case "shopGenerator":
        $("#contentTreasure .dashHeader h2").html("Shop Generator");
        break;
      default:
        break;
    }

    $("#contentTreasure .innerContent > div").animate({"top" : "270px"}, 500);
    $("#" + nexMainTextGen).animate({"top" : "0px"}, 500);

    console.log(nexMainTextGen);

  });

  /*
   * Open the right generator tables - magic
   */
  var activeStateGeneratorMagic;

  $("#treasureGenerator .sidebar li").click(function(){
    var whatId = $(this).html();
    console.log(whatId);
    switch (whatId) {
      case 'Magic A':
      console.log("hi");
        resetallMagicTables();
        $(".treasureMagicA").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      case 'Magic B':
        resetallMagicTables();
        $(".treasureMagicB").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      case 'Magic C':
        resetallMagicTables();
        $(".treasureMagicC").animate({"left": "200px"}, 500);
        $(this).addClass("selectedMagic");
        break;
      default:
        console.log("none selected");
    }

    function resetallMagicTables(){
      $(".treMag").animate({"left": "600px"}, 500);
      $("#treasureGenerator .sidebar li").removeClass("selectedMagic");
    }
  })

  /*
   * Roll those d100's for treasure
   */
  $(".treasureMagicA .rollButton").click(function(){
    var randomDieMagic = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicA").find(".rollResult").html(randomDieMagic);
    if(randomDieMagic > 0 && randomDieMagic < 51){ $(".treasureMagicA .treasureResult").html("Potion of healing, <em>Heals 2d4 hp</em>"); }
    else if(randomDieMagic > 50 && randomDieMagic < 61){ $(".treasureMagicA .treasureResult").html("Spell Scroll, <em>random cantrip of a random class</em>"); }
    else if(randomDieMagic > 60 && randomDieMagic < 71){ $(".treasureMagicA .treasureResult").html("Potion of climbing, <em>Creature becomes capable of climbing verticle walls as difficult terrain</em>"); }
    else if(randomDieMagic > 70 && randomDieMagic < 99){ $(".treasureMagicA .treasureResult").html("Potion of greater healing, <em>Heals way more than a smaller healing potion</em>"); }
    else if(randomDieMagic === 99){ $(".treasureMagicA .treasureResult").html("Bag Of Holding, <em>Bag that might hold up to 250kg or 600kg depending on size. No life after 10 minutes</em>"); }
    else if(randomDieMagic === 100 && randomDieMagic < 61){ $(".treasureMagicA .treasureResult").html("Driftglobe, <em>Giant ball of light</em>"); }
  })

  $(".treasureMagicB .rollButton").click(function(){
    var randomDieMagic = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicB").find(".rollResult").html(randomDieMagic);
    if(randomDieMagic > 0 && randomDieMagic < 51){ $(".treasureMagicB .treasureResult").html("Potion of healing, <em>Heals 2d4 hp</em>"); }
    else if(randomDieMagic > 50 && randomDieMagic < 61){ $(".treasureMagicB .treasureResult").html("Spell Scroll, <em>random cantrip of a random class</em>"); }
    else if(randomDieMagic > 60 && randomDieMagic < 71){ $(".treasureMagicB .treasureResult").html("Potion of climbing, <em>Creature becomes capable of climbing verticle walls as difficult terrain</em>"); }
    else if(randomDieMagic > 70 && randomDieMagic < 99){ $(".treasureMagicB .treasureResult").html("Potion of greater healing, <em>Heals way more than a smaller healing potion</em>"); }
    else if(randomDieMagic === 99){ $(".treasureMagicB .treasureResult").html("Bag Of Holding, <em>Bag that might hold up to 250kg or 600kg depending on size. No life after 10 minutes</em>"); }
    else if(randomDieMagic === 100 && randomDieMagic < 61){ $(".treasureMagicB .treasureResult").html("Driftglobe, <em>Giant ball of light</em>"); }
  })

  $(".treasureMagicC .rollButton").click(function(){
    var randomDieMagic = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicC").find(".rollResult").html(randomDieMagic);
    if(randomDieMagic > 0 && randomDieMagic < 51){ $(".treasureMagicC .treasureResult").html("Potion of healing, <em>Heals 2d4 hp</em>"); }
    else if(randomDieMagic > 50 && randomDieMagic < 61){ $(".treasureMagicC .treasureResult").html("Spell Scroll, <em>random cantrip of a random class</em>"); }
    else if(randomDieMagic > 60 && randomDieMagic < 71){ $(".treasureMagicC .treasureResult").html("Potion of climbing, <em>Creature becomes capable of climbing verticle walls as difficult terrain</em>"); }
    else if(randomDieMagic > 70 && randomDieMagic < 99){ $(".treasureMagicC .treasureResult").html("Potion of greater healing, <em>Heals way more than a smaller healing potion</em>"); }
    else if(randomDieMagic === 99){ $(".treasureMagicC .treasureResult").html("Bag Of Holding, <em>Bag that might hold up to 250kg or 600kg depending on size. No life after 10 minutes</em>"); }
    else if(randomDieMagic === 100 && randomDieMagic < 61){ $(".treasureMagicC .treasureResult").html("Driftglobe, <em>Giant ball of light</em>"); }
  })

})
