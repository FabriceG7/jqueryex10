// Lance le script une fois la page html chargée
$(document).ready(function(){
  // Lance la fonction au survol d'une div
  $('div').mouseover(function(){
    // Si la div ciblée a la class green alors le texte passe au vert
    if ($(this).hasClass('green')) {
      $('#text').css('color','green');
    }
      // Si la div ciblée a la class red alors le texte passe au rouge
    else if ($(this).hasClass('red')) {
      $('#text').css('color','red');
    }
      // Si la div ciblée a la class blue alors le texte passe au bleu
    else if ($(this).hasClass('blue')) {
      $('#text').css('color','blue');
    }
  });
  // Lance la fonction lorsque la souris quitte une div
  $('div').mouseout(function(){
    $('#text').css('color','black');
  });
});
