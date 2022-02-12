$(document).ready(function(){
  for (let i = 1; i < 16; i++) {
    $("#b"+i).click(function(){
      var lazy = $("#b"+i).text();
      $("#resultado").append(lazy);
    });
  }

  $("#limpar").click(function(){
    $("#resultado").empty();
  })

  $("#calculo").click(function(){
    if(($("#resultado").text()) != ""){
      var result = eval($("#resultado").text());
      $("#resultado").empty();
      $("#resultado").append(result);
    } else {
      $("#resultado").append("Insira Valores") 
    }
  })
});