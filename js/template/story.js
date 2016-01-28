$(document).ready(function(){

  /*
   * Next and previous story
   */
  var currentStory = 1;

  $("#storyNext").click(function(){
    if(currentStory === 1){
      $("#storyPart2").animate({"left": "0"}, 500);
      currentStory++;
      return;
    }
    if(currentStory === 2){
      $("#storyPart3").animate({"left": "0"}, 500);
      currentStory++;
      return;
    }
    if(currentStory === 3){
      $("#storyPart2").animate({"left": "-300px", "opacity": "0"}, 500, function(){ $("#storyPart2").css({"left": "300px", "opacity": "1"});});
      $("#storyPart3").animate({"left": "-300px", "opacity": "0"}, 500, function(){ $("#storyPart3").css({"left": "300px", "opacity": "1"});});
      currentStory = 1;
      return;
    }
  })

  $("#storyPrev").click(function(){
    if(currentStory === 3){
      $("#storyPart3").animate({"left": "300px"}, 500);
      $("#storyPart2").animate({"left": "0px"}, 500);
      currentStory--;
      return;
    }
    if(currentStory === 2){
      $("#storyPart2").animate({"left": "300px"}, 500);
      currentStory--;
      return;
    }
    if(currentStory === 1){
      $("#storyPart3").animate({"left": "0px"}, 500);
      currentStory = 3;
      return;
    }
  })

  var long = true;

  $("#timeUp").click(function(){
    if(long){
      for(var i =1; i < 8; i++){
        $(".dates p:nth-child(" + i + ")").animate({"max-height": "0", "margin-bottom": "0px", "overflow": "hidden"}, 500);
      }
      for(var i =1; i < 8; i++){
        $(".timeLine p:nth-child(" + i + ")").animate({"max-height": "0", "margin-bottom": "0px", "overflow": "hidden"}, 500);
      }
      long = false;
      $(this).removeClass("fa-chevron-up");
      $(this).addClass("fa-chevron-down");
      return;
    }else{
      for(var i =1; i < 8; i++){
        $(".dates p:nth-child(" + i + ")").animate({"max-height": "100px", "margin-bottom": "10px", "overflow": "visible"}, 500);
      }
      for(var i =1; i < 8; i++){
        $(".timeLine p:nth-child(" + i + ")").animate({"max-height": "100px", "margin-bottom": "10px", "overflow": "visible"}, 500);
      }
      long = true;
      $(this).removeClass("fa-chevron-down");
      $(this).addClass("fa-chevron-up");
      return;
    }
  })

})
