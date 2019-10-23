$(document).ready(function(){
  $("#formOne").submit(function(event){

    var userInput = $("input#whatToShout").val();

    var upperCase = userInput.toUpperCase();

    $(".reply").text(upperCase + "!!!").show();

    event.preventDefault();

  });
});
