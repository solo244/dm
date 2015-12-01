$(document).ready(function(){
  $("#mapSide input").keypress(function(){
    var toUse = $(this).val();
    console.log(toUse);

    var theList = $("#mapSide ul li");
    var numerOfItems = theList.length;

    console.log(numerOfItems);

    for(var i=0; i < numerOfItems; i++){
      
    }
  })
})
