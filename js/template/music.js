$(document).ready(function(){

  /*
   * Clicks for sound panels ~Tune Heavy Metal~
   */
  $("#contentMusic i").click(function(){
    var whatSoundClick = $(this).prop("id");
    var whatSoundClickPound = "#" + whatSoundClick;
    console.log($(whatSoundClickPound).css("color"));

    switch (whatSoundClick) {
      case 'soundBreaking':
        hideallSounds();
        $(".sBreaking .sound").animate({"height": "118px"}, 500);
        $("#soundBreaking").css("color", "rgb(155, 182, 201)");
        break;
      case 'soundCombat':
        hideallSounds();
        $(".sCombat .sound").animate({"height": "118px"}, 500);
        $("#soundCombat").css("color", "rgb(155, 182, 201)");
        break;
      case 'soundEnvironment':
        hideallSounds();
        $(".sEnvironment .sound").animate({"height": "118px"}, 500);
        $("#soundEnvironment").css("color", "rgb(155, 182, 201)");
        break;
      case 'soundMonsters':
        hideallSounds();
        $(".sMonster .sound").animate({"height": "118px"}, 500);
        $("#soundMonsters").css("color", "rgb(155, 182, 201)");
        break;
      case 'soundNature':
        hideallSounds();
        $(".sNature .sound").animate({"height": "118px"}, 500);
        $("#soundNature").css("color", "rgb(155, 182, 201)");
        break;
      case 'soundMood':
        break;
      default:
        console.log("Sound not there");
    }
  });

  function hideallSounds(){
    $(".soundCol .sound").animate({"height": "0px"}, 500);
    $("#contentMusic i").css("color", "rgb(27, 31, 41)");
  }

  /*
   * Audio controls
   */
  $(".soundCol .sound").each(function(){
    $(this).append("<div class='playSoundsButton'><i class='fa fa-play-circle'></i></div>");
    $(this).find(".playSoundsButton").css("display", "none");
  });

  $(".soundCol .sound").click(function(){
    stopallSounds();
    var whatSound = $(this).find("audio")[0];
    if(whatSound.paused){
      console.log("playing now");
      whatSound.play();
      $(this).find(".playSoundsButton").css("display", "block");
    }
    else{
      console.log("pausing now");
      whatSound.pause();
      $(this).find(".playSoundsButton").css("display", "none");
    }
  });

  function stopallSounds(){
    //$(".sound audio")[0].pause();
    $(".soundCol .sound").each(function(){
      $(this).find("audio")[0].pause();
      $(this).find("audio")[0].currentTime = 0;
      $(this).find(".playSoundsButton").css("display", "none");
    });
    //$(".sound audio")[0].currentTime == 0;
    //$(".playSoundsButton").css("display", "none");
  }

});
