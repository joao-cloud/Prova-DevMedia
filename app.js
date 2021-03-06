$(document).ready(function(){
   $(".hamburguer").click(function(){ 
       $(this).toggleClass("ativo");
       $(".menu").toggleClass("ativo");
   });
});