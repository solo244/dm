$(document).ready(function(){

  /*
   * Init
   */
  $("#combatTracker .notification").html("");
  $("#combatTracker .notification").css("opacity", "0");

  /*
   * Random die rolling + preloader
   */
  $(".dieRollRowLoading").hide();

  $(".dierollWindow .dieRollRow .button").click(function(){
    $(".rollResults").html("");
    var theEyes = $(this).html().replace("1d","");
    var rollTheDie = Math.floor((Math.random() * theEyes) + 1);
    var whichRoll = $(this).closest(".dieRollRow").find(".rollResults");
    var slowFeedback = setInterval(function(){ myTimer(); }, 700);
    $(this).closest(".dieRollRow").find(".dieRollRowLoading").show();

    function myTimer(){
      whichRoll.html(rollTheDie);
      clearInterval(slowFeedback);
      $(".dieRollRowLoading").hide();
    }
  });

  /*
   * Sorting
   */
  var $divsToSort = $("#combatTracker .sort");
  var sortHighestInitiative = true;

  $("#combatSort").click(function(){
    var alphabeticallyOrderedDivs = $divsToSort.sort(function(a,b){
      return parseInt($(a).find(".fieldInitiative").val()) > parseInt($(b).find(".fieldInitiative").val());
    });
    $("#combatTracker #iniSorting").html(alphabeticallyOrderedDivs);

    $("#combatTracker .notification").css("opacity", "1");
    $("#combatTracker .notification").html("Sorted!");
    $("#combatTracker .notification").animate({"opacity": "0"}, 1500, function(){ $(this).html(""); });
 });

  /*
   * Saving
   */
  $("#combatSave").click(function(){
    // Nala
    var NalaHealth              = $("#playerNala .firstfieldHealth").val();
    var NalaHealthTotal         = $("#playerNala .secfieldHealth").val();
    var NalaInitiative          = $("#playerNala .fieldInitiative").val();
    var NalaSlots               = $("#playerNala .fieldSlots").val();
    var NalaGold                = $("#playerNala .fieldMoney").val();
    var NalaConditions          = $("#playerNala .fieldCons").val();
    localStorage.nHealth        = NalaHealth;
    localStorage.nHealthTotal   = NalaHealthTotal;
    localStorage.nInitiative    = NalaInitiative;
    localStorage.nSlots         = NalaSlots;
    localStorage.nGold          = NalaGold;
    localStorage.nConditions    = NalaConditions;
    // Lai
    var LaiHealth               = $("#playerLai .firstfieldHealth").val();
    var LaiHealthTotal          = $("#playerLai .secfieldHealth").val();
    var LaiInitiative           = $("#playerLai .fieldInitiative").val();
    var LaiSlots                = $("#playerLai .fieldSlots").val();
    var LaiGold                 = $("#playerLai .fieldMoney").val();
    var LaiConditions           = $("#playerLai .fieldCons").val();
    localStorage.lHealth        = LaiHealth;
    localStorage.lHealthTotal   = LaiHealthTotal;
    localStorage.lInitiative    = LaiInitiative;
    localStorage.lSlots         = LaiSlots;
    localStorage.lGold          = LaiGold;
    localStorage.lConditions    = LaiConditions;
    // Thia
    var ThiaHealth              = $("#playerOttan .firstfieldHealth").val();
    var ThiaHealthTotal         = $("#playerThia .secfieldHealth").val();
    var ThiaInitiative          = $("#playerThia .fieldInitiative").val();
    var ThiaSlots               = $("#playerThia .fieldSlots").val();
    var ThiaGold                = $("#playerThia .fieldMoney").val();
    var ThiaConditions          = $("#playerThia .fieldCons").val();
    localStorage.tHealth        = ThiaHealth;
    localStorage.tHealthTotal   = ThiaHealthTotal;
    localStorage.tInitiative    = ThiaInitiative;
    localStorage.tSlots         = ThiaSlots;
    localStorage.tGold          = ThiaGold;
    localStorage.tConditions    = ThiaConditions;
    // Ottan
    var OttanHealth             = $("#playerOttan .firstfieldHealth").val();
    var OttanHealthTotal        = $("#playerOttan .secfieldHealth").val();
    var OttanInitiative         = $("#playerOttan .fieldInitiative").val();
    var OttanSlots              = $("#playerOttan .fieldSlots").val();
    var OttanGold               = $("#playerOttan .fieldMoney").val();
    var OttanConditions         = $("#playerOttan .fieldCons").val();
    localStorage.oHealth        = OttanHealth;
    localStorage.oHealthTotal   = OttanHealthTotal;
    localStorage.oInitiative    = OttanInitiative;
    localStorage.oSlots         = OttanSlots;
    localStorage.oGold          = OttanGold;
    localStorage.oConditions    = OttanConditions;

    $("#combatTracker .notification").css("opacity", "1");
    $("#combatTracker .notification").html("Saved!");
    $("#combatTracker .notification").animate({"opacity": "0"}, 1500, function(){ $(this).html(""); });
  });

  /*
   * Loading
   */
  loadStats();

  $("#combatLoad").click(function(){
    loadStats();
  });

  function loadStats(){
    // Nala
    $("#playerNala .firstfieldHealth").val(localStorage.nHealth);
    $("#playerNala .secfieldHealth").val(localStorage.nHealthTotal);
    $("#playerNala .fieldInitiative").val(localStorage.nInitiative);
    $("#playerNala .fieldSlots").val(localStorage.nSlots);
    $("#playerNala .fieldMoney").val(localStorage.nGold);
    $("#playerNala .fieldCons").val(localStorage.nConditions);
    // Lai
    $("#playerLai .firstfieldHealth").val(localStorage.lHealth);
    $("#playerLai .secfieldHealth").val(localStorage.lHealthTotal);
    $("#playerLai .fieldInitiative").val(localStorage.lInitiative);
    $("#playerLai .fieldSlots").val(localStorage.lSlots);
    $("#playerLai .fieldMoney").val(localStorage.lGold);
    $("#playerLai .fieldCons").val(localStorage.lConditions);
    // Thia
    $("#playerThia .firstfieldHealth").val(localStorage.tHealth);
    $("#playerThia .secfieldHealth").val(localStorage.tHealthTotal);
    $("#playerThia .fieldInitiative").val(localStorage.tInitiative);
    $("#playerThia .fieldSlots").val(localStorage.tSlots);
    $("#playerThia .fieldMoney").val(localStorage.tGold);
    $("#playerThia .fieldCons").val(localStorage.tConditions);
    // Ottan
    $("#playerOttan .firstfieldHealth").val(localStorage.oHealth);
    $("#playerOttan .secfieldHealth").val(localStorage.oHealthTotal);
    $("#playerOttan .fieldInitiative").val(localStorage.oInitiative);
    $("#playerOttan .fieldSlots").val(localStorage.oSlots);
    $("#playerOttan .fieldMoney").val(localStorage.oGold);
    $("#playerOttan .fieldCons").val(localStorage.oConditions);

    $("#combatTracker .notification").css("opacity", "1");
    $("#combatTracker .notification").html("Loaded!");
    $("#combatTracker .notification").animate({"opacity": "0"}, 1500, function(){ $(this).html(""); });
  }

  /*
   * Pause mode
   */
  $("#combatPause").click(function(){
    $("#theOverlay").animate({"width": "1920px"}, 800);
  });

  $("#theOverlay button").click(function(){
    $("#theOverlay").animate({"width": "0px"}, 800);
  });
});
