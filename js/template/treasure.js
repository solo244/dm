$(document).ready(function(){

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
        break;
      case 'Magic B':
        resetallMagicTables();
        $(".treasureMagicB").animate({"left": "200px"}, 500);
        break;
      case 'Magic C':
        resetallMagicTables();
        $(".treasureMagicC").animate({"left": "200px"}, 500);
        break;
      default:
        console.log("none selected");
    }

    function resetallMagicTables(){
      $(".treMag").animate({"left": "600px"}, 500);
    }
  })

  /*
   * Roll those d100's
   */
  $(".treasureMagicA .rollButton").click(function(){
    var randomDieMagic = Math.floor(Math.random() * 100) + 1;
    $(".treasureMagicA").find(".rollResult").html(randomDieMagic);
    if(randomDieMagic > 0 && randomDieMagic < 51){
      $(".treasureMagicA .treasureResult").html("Potion of healing, <em>Heals 2d4 hp</em>");
    }
    else if(randomDieMagic > 50 && randomDieMagic < 61){
      $(".treasureMagicA .treasureResult").html("Spell Scroll, <em>cantrip</em>");
    }
  })

})
