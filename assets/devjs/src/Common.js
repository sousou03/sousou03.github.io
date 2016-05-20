//--------------------------------------------------
//
//  Common
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  var param = {
        area : '.pjaxWrap, #header, #topVisualWrap, .ui__menu, .detail',
        link : 'a.pjax',
        ajax: { timeout: 2500},
        wait: 600,
        load : { script: true }
      }

  function onReady() {

    gb.isDevice();
    gb.isBrowserVersion();
    gb.isResizeOrientation();
    gb.isIndividual();

    // pjax
    new gb.Pjax(param)

  }

  function onLoad() {

  }

  function setEvents() {

    $(document).on('ready', onReady);
    $(window).on('load', onLoad);

  }


  function main() {

    setEvents();

  } 

  main();

}());