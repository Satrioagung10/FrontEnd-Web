$(document).ready(function() {
    const $toggleSwitch = $('#checkbox');
    const $home = $('body')

  
    $toggleSwitch.on('change', function() {
      if ($toggleSwitch.is(':checked')) {

        $home.css({
            backgroundColor: '#011937',
            color: 'white'
          })
  
      } else {
      
        $home.css({
            backgroundColor: 'white',
            color: 'black'
          })
  
      }
    });
  });

  $(".js-scroll-trigger").click(function(){
    $(".menu-btn").click();
  });