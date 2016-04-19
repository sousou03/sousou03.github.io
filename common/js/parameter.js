// ===================================================================
// パラメータ調整
// ===================================================================

$(function(){

  var $input = $('#input'),
      $select = $('#select'),
      $range = $('#range'),

      val_input = 'default',
      val_select = 'default',
      val_range = 0,

      Timer,
      FPS = 1000/30;

  // 値を反映
  function getVal() {

  }

  function watch_inputHandler(e) {
    if (e == undefined) return;

    var target = e.target;
    val_input = target.value;
    
    console.log(val_input);
  }

  function watch_selectHandler(e) {
    if (e == undefined) return;

    $('.text span').removeClass();

    switch (e.target.value) {
      case '1':  
        $(window).trigger('blurOut');
        break;
      case '2': 
       $(window).trigger('blurIn');
       break; // right
      case '3':
       $(window).trigger('scaleOut');
        break; // bottom
      case '4':
       $(window).trigger('perspectiveZ02');
        break; // bottom
      case '5':
       $(window).trigger('spring');
        break; // bottom
      case '6':
       $(window).trigger('transformOrigin');
        break; // bottom
      case '7':
       $(window).trigger('perspectiveZ01');
        break; // bottom
      default:
        break;
    }
  

  }

  function watch_rangeHandler() {

    val_range = $range.val();
    
    console.log(val_range);
  }

  function startUpdate() {
    Timer = setInterval(updateHandler,FPS);
  }

  function updateHandler() {

    watch_rangeHandler(); 

  }

  function stopUpdate() {
    clearInterval(Timer);
  }

  function setEvents() {

      $input.on("keyup", watch_inputHandler); 
      $select.on("change", watch_selectHandler); 
      $range.on("change", watch_rangeHandler); 
      // startUpdate();

  }

  setEvents();

})