//--------------------------------------------------
//
//  main
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  var PosCenter,menu;

  var r = [],rh = [];

  function onReady() {

    // setup 各デバイス別チェック
    // gb.isIndividual();
    
    // ui
    menu = new gb.Menu($('.ui__menu_btn'),$('.ui__menu_btn_c'));

    // cv


  }

  function onLoad() {

    // ------------------------------------------------------------
    //
    //  size
    //
    // ------------------------------------------------------------
    gb.setImgSPSize($('img'));

    // portrait時
    var win = {
            def: 375,
            min: 320,
            max: 375,
            hFlag: false,
          };
    var sizeList = [
      // basic
      {obj:$('img'),list:[],win:win,notObj:'',inner:'',notList:[]},
      {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:[]},

      // topvisual
      {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
      {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:[]},
      {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:[]},
      {obj:$('#topVisualWrap .barL'),list:[],win:win,notObj:'',inner:'',notList:['width']},
      {obj:$('.ui__menu_btn'),list:[],win:win,notObj:'',inner:'',notList:[]},

      // header
      {obj:$('#header .barL'),list:[],win:win,notObj:'',inner:'',notList:['height','top']},
      {obj:$('#header .page'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['top']},
      
      // menu
      {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:[]},  
      {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
      {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height']},
    ]
    
    for (var i = 0; i < sizeList.length; i++) {
      var list = sizeList[i];
      var Re = new gb.Size(list.obj,list.list,list.win,list.notObj,list.inner,list.notList);
      Re.getDef();
      r.push(Re);
    };

    // landscape時
    var win = {
            def: 375,
            min: 320,
            max: 375,
            hFlag: true,
          };
    var sizeListH = [
      // basic
      {obj:$('img'),list:[],win:win,notObj:'',inner:'',notList:[]},
      {obj:$('.fzLiquid'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:[]},

      // topvisual
      {obj:$('#topVisual'),list:[],win:win,notObj:'',inner:'inner',notList:[]},
      {obj:$('#topVisual .tit'),list:[],win:win,notObj:'',inner:'',notList:[]},
      {obj:$('#topVisual .text'),list:[],win:win,notObj:'',inner:'',notList:[]},

      // header
      {obj:$('#header .barL'),list:[],win:win,notObj:'',inner:'',notList:['height','top']},
      {obj:$('#header .page'),list:['font-size','letter-spacing'],win:win,notObj:'',inner:'',notList:['top']},

      // menu
      {obj:$('.ui__menu .item'),list:[],win:win,notObj:'',inner:'',notList:[]},  
      {obj:$('.ui__menu .ui__menu_btn_c'),list:[],win:win,notObj:'',inner:'',notList:['top']},  
      {obj:$('.ui__menu'),list:[],win:{def: 375,min: 320,max: 10000},notObj:'',inner:'',notList:['width','height']},
    ]
    
    for (var i = 0; i < sizeListH.length; i++) {
      var list = sizeListH[i];
      var Re = new gb.Size(list.obj,list.list,list.win,list.notObj,list.inner,list.notList);
      rh.push(Re);
    };
    
    // ------------------------------------------------------------
    //
    //  position
    //
    // ------------------------------------------------------------
    // layout
    var $target = $('.adjust');
    var $targetH = $('.adjustH');
    var $targetW = $('.adjustW');

    PosCenter = new gb.PosCenter($target,$targetH,$targetW);


    // menu
    $('.ui__menu_btn_c').trigger('touchstart');

    // 初期化
    onResize();

    // ページ表示
    $(window).trigger('show');

  }

  function onResize() {
    // setup
    gb.isResizeOrient();

    // menu landscape対応
    if ($('body').hasClass('landscape')) {

      // wrapper
      $('.bodyInner').addClass('wrapper');
      $('.contentsWrap').removeClass('wrapper');

      $('#topVisualWrap .barL').hide();

      // size
      for (var i = 0; i < rh.length; i++) {
        rh[i].onResize();
      };

      // menu
      $('#topVisualWrap .bg').addClass('is-static');
      $('.ui__menu')
        .addClass('is-scroll-y is-hidden-x')
        .css({padding: '30px 0'});
      $('.ui__menu .itemWrap')
        .css({height: 500})
        .addClass('cssNone');
      $('.ui__menu .ui__menu_btn_c').addClass('landState');

    } else {

      // wrapper
      $('.bodyInner').removeClass('wrapper');
      $('.contentsWrap').addClass('wrapper');

      $('#topVisualWrap .barL').show();

      // size
      for (var i = 0; i < r.length; i++) {
        r[i].onResize();
      };

      // menu
      $('#topVisualWrap .bg').removeClass('is-static');
      $('.ui__menu').removeClass('is-scroll-y is-hidden-x');
      $('.ui__menu')
        .removeClass('is-scroll')
        .css({padding: '0'});
      $('.ui__menu .itemWrap')
        .css({height: 'auto'})
        .removeClass('cssNone');
      $('.ui__menu .ui__menu_btn_c').removeClass('landState');

    }

    // position
    PosCenter.onResize();

  }

  function onShow() {

    TweenMax.set($('.pjaxMotion'), {y: 50});
    TweenMax.to($('.pjaxMotion'), 0.6, {
        y: 0,
        opacity: 1,
        ease: Power3.easeOut,
      });

  }

  function onRender() {

    $(window).on('resize', onResize);

    onReady();
    onLoad();

  }

  function setEvents() {

    // 最初のページがこのページだった際のイベント
    $(document).on('ready', onReady);
    $(window).on('load', onLoad);
    $(window).on('resize', onResize);
    $(window).on('show', onShow);

    // pjax遷移時のイベント
    $(window).on('renderAbout', onRender);

  }

  function main() {

    setEvents();

  }

  main();

})();
