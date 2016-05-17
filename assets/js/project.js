//--------------------------------------------------
//
//  mains
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  var adjust,menu,modal;

  function onReady() {

    // layout
    var $target = $('.adjust');
    var $targetH = $('.adjustH');
    var $targetW = $('.adjustW');

    adjust = new gb.Adjust($target,$targetH,$targetW);

    // ui
    menu = new gb.Menu($('.ui__menu_btn'),$('.ui__menu .ui__menu_btn_c'));
    modal = new gb.Modal($('#casestudy .box'),$('.detail .ui__menu_btn_c'))

    // cv


  }

  function onLoad() {

    // layout
    $('#topVisualWrap').height($(window).height());
    adjust.onLoad();
    $('.ui__menu_btn_c').trigger('click'); //menu閉じる

  }

  function onClick() {

  }


  function onResize() {

    adjust.onResize();
    $('.ui__menu').trigger('click');

  }

  function setEvents() {

    $(document).on('ready', onReady);
    $(window).on('load', onLoad);
    $(window).on('click', onClick);
    $(window).on('resize', onResize);

  }

  function main() {

    setEvents();

  }

  main();

})();