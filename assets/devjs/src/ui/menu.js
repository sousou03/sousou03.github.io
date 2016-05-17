//--------------------------------------------------
//
//  menu
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Menu($btn,$close) {

    this.$btn = $btn;
    this.$close = $close;
    this.$menu = $('.ui__menu');
    this.$item = $('.ui__menu .item a');

    this.dur = 2000,
    this.ease = 'easeOutQuad';

    this.W = $(window).width(),
    this.H = $(window).height();

    this.setEvents();
    this.ready();

  }

  Menu.prototype = {

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
      
    },

    close: function() {

      this.$menu.hide();

    },

    getWindowSize: function() {

      W = $(window).width();
      H = $(window).height();

    },

    stopProp: function(e) {

      e.stopPropagation();

    },

    onResize : function() {

      this.getWindowSize();

    },

    setEvents: function() {

      var self = this;

      this.$btn.on('click', function(){self.open.call(self);});
      this.$close.on('click', function(){self.close.call(self);});
      this.$item.on('click', function(e){self.stopProp.call(self,e);});

    },

  }

  gb.Menu = Menu;

})();