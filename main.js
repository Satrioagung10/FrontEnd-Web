$(document).ready(function() {
    const $toggleSwitch = $('#checkbox');
    const $home = $('body')

  
    $toggleSwitch.on('change', function() {
      if ($toggleSwitch.is(':checked')) {

        $home.css({
            backgroundColor: '#1a1a1a',
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