//--------------------------------------------------
//
//  modal (detail)
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Modal($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.detail');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.setEvents();
    this.ready();

  }

  Modal.prototype = {

    ready: function() {


    },

    toggle: function() {

      if (this.$btn.hasClass('on')) {

        this.close();

      } else {

        this.open();

      };

      $btn.toggleClass('on');

    },

    open: function() {

      this.$menu.show();
      log(1);
      
    },

    close: function() {

      this.$menu.hide();
      log(2);

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      this.$btn.on('click', function(){self.open.call(self);});
      this.$close.on('click', function(){self.close.call(self);});

    },

  }

  gb.Modal = Modal;

})();