//--------------------------------------------------
//
//  pjax
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function Pjax(param) {

    this.param = param;

    this.id = null;
    gb.pjax = {count:0};
    gb.Timer = null;

    this.setEvents();

  }

  Pjax.prototype = {

    setID: function () {

        this.id = $('.pjaxWrap').data('id');
        $('body').attr('id', this.id);

    },

    onReady: function () {

        $.pjax(this.param);
        
    },

    onFetch: function () {

      // alert('fetch');
      // イベント解除
      $(document).off('ready');
      $(window).off('render load resize orientationchange');

      // ページ離脱時のモーション
      TweenMax.to($('.pjaxMotion'), 0.6, {
          y: -50,
          opacity: 0,
          ease: Power3.easeIn,
          onComplete: function(){

            // 非表示
            $('.pjaxMotion').css({opacity: 0});

          }
        });
        
    },

    onRender: function () {

      // alert('render');

      $('.bodyInner').scrollTop(0);
      $('.contentsWrap').scrollTop(0);

      this.setID();

      switch (this.id){
        case 'top':
          $(window).trigger('renderTop');
          break;
        case 'about':
          $(window).trigger('renderAbout');
          break;
        case 'technology':
          $(window).trigger('renderTechnology');
          break;
        case 'project':
          $(window).trigger('renderProject');
          break;
        case 'detail':
          $(window).trigger('renderDetail');
          break;
        case 'contact':
          $(window).trigger('renderContact');
          break;
      } 

    },

    setEvents: function () {

      var self = this;

      this.onReady();

      $(document).on('pjax:fetch', function(){self.onFetch.call(self)});
      $(document).on('pjax:render', function(){self.onRender.call(self)});

    },

  }

  gb.Pjax = Pjax;

})();