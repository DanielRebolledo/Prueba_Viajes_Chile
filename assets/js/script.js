 $(function (){

//cambio de color en el header-- Funcionaaaa profee!!!!!
  $(window).scroll(function(){

    $('nav').toggleClass('bgcolor', $(this).scrollTop()>50)
  })

   //Tooltip Bootstrap
  $('[data-toggle="tooltip"]').tooltip()

  //Smoth Scrolling
  $("a").on('click', function(event) {

    
    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End 
  });
  
})
