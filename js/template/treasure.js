$(document).ready(function(){

  /*
   * Open up the right menu
   */
  $("#contentTreasure .innerContent > div").css({"top" : "270px"});

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

    $("#contentTreasure .dashHeader i").css("color", "rgb(27, 31, 41)");
    $(this).css("color", "rgb(155, 182, 201)");

    $("#contentTreasure .innerContent > div").animate({"top" : "270px"}, 500);
    $("#" + nexMainTextGen).animate({"top" : "0px"}, 500);

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

  /*
   * Open the right generator tables - shops
   */
  $("#shopGenerator .sidebar li").click(function(){
    var whatId = "treasure" + $(this).html().replace(" Shop", "").replace(" and Games", "").replace(" Dealers", "").replace(" Store", "").replace(" supplies", "");
    console.log(whatId);

    $("#shopGenerator .treShop").animate({"left" : "500px"}, 500);
    $("." + whatId).animate({"left" : "0px"}, 500);

    $("#shopGenerator .sidebar li").removeClass("selectedMagic");
    $(this).addClass("selectedMagic");
  })

  /*
   * Open the right generator tables - names
   */
  $("#npcGenerator .sidebar li").click(function(){
    var whatId = "treasure" + $(this).html();
    console.log(whatId);

    $("#npcGenerator .treNPC").animate({"left" : "500px"}, 500);
    $("." + whatId).animate({"left" : "0px"}, 500);

    $("#npcGenerator .sidebar li").removeClass("selectedMagic");
    $(this).addClass("selectedMagic");
  })

  /*
   * Randomly generate names and shopkeepers
   */
   var randomShopKeepers = [
     "The shopkeeper is a willowy male gnome named Kurdu.",
     "The shopkeeper is a young male half-elf named Homund.",
     "The shopkeeper is an old male elf named Ithir.",
     "The shopkeeper is a tall male half-orc named Heodoingoia. He is a retired thief, and keeps a fine steel dagger at his belt.",
     "The shopkeeper is a tall female elf named Thalia. She is particularly interested in tomes and scrolls from the lost elven kingdom of Dorwine.",
     "The shopkeeper is an old female elf named Gilme.",
     "The shopkeeper is an overweight male gnome named Sanzir. He will purchase items for one-third value, no questions asked.",
     "The shopkeeper is a young male dwarf named Dwari. He is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
     "The shopkeeper is a bold female half-elf named Alin. She is a retired adventurer, and often tells stories of distant lands and terrible monsters.",
     "The shopkeeper is a slender female human named Wulburh.",
     "The shopkeeper is an impish female half-elf named Mirielye. She was once an adventurer, but retired after Illfang the Kobold Lord murdered her family.",
     "The shopkeeper is a willowy male gnome named Rici. He was once an adventurer, but was maimed by a dragon.",
     "The shopkeeper is a slender male half-elf named Berny.",
     "The shopkeeper is a quiet female elf named Findalye. She was once an adventurer, but retired after her companions were lost in the Caverns of Illfang the Kobold Lord.",
     "The shopkeeper is a short female halfling named Wene Cholte.",
     "The shopkeeper is an old female human named Eren. She will purchase items for one-third value, no questions asked.",
     "The shopkeeper is a bold female half-elf named Nimluthel. She was once an adventurer, but stumbled into a fortune and retired.",
     "The shopkeeper is a tall female gnome named Carel. She is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
     "The shopkeeper is a stout female elf named Ebrialoth. She was once an adventurer, but retired to marry and raise a family.",
     "The shopkeeper is a thin male dwarf named Urim. He will purchase items for one-third value, no questions asked.",
     "The shopkeeper is a tall male half-elf named Willes. He will purchase items for one-third value, no questions asked.",
     "The shopkeeper is an old male dwarf named Manni.",
     "The shopkeeper is an overweight female elf named Celalwe. She is a retired thief, and is rumored to have a hidden cache of stolen treasure.",
     "The shopkeeper is an adventurous female half-orc named Brosla. She is a retired thief, and is rumored to have a hidden cache of stolen treasure.",
     "The shopkeeper is a suspicious male human named Gauward Elnnys. He is a retired adventurer, and keeps a collection of maps of forgotten tombs and dungeons.",
     "The shopkeeper is a tall male half-orc named Stimir. He was once an adventurer, but stumbled into a fortune and retired.",
     "The shopkeeper is an overweight male elf named Ricua. He will purchase items for one-third value, no questions asked.",
     "The shopkeeper is a hardworking female human named Odgild.",
     "The shopkeeper is a willowy male halfling named Inoc. He is a retired adventurer, and keeps a collection of maps of distant lands.",
     "The shopkeeper is an old female halfling named Adan Finell. She was once an adventurer, but was maimed in the Dark Catacombs of the Demon Lord.",
     "The shopkeeper is a willowy male half-orc named Lavoi. He is particularly interested in armor and shields from the hoard of the dragon Arsid.",
     "The shopkeeper is a tall male dwarf named Bali.",
     "The shopkeeper is a tall male gnome named Rainatz.",
     "The shopkeeper is an old male human named Rewyn."
   ];

   $("#shopKeepBut").click(function(){
     var numberKeepersTotal = randomShopKeepers.length;
     var randomKeep = Math.floor(Math.random() * (numberKeepersTotal-1)) + 1;
     $("#randomisedKeepers").append("<p>" + randomShopKeepers[randomKeep] + "</p>");

     $("#randomisedKeepers p").click(function(){
       $(this).remove();
     })
   })



})
