//--------------------------------------------------
//
//  vimeo
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Vimeo($obj,$btn) {

    var iframe = $obj[0];
    this.player = $f(iframe);

    log(this.player);

    this.$btn = $btn;

    this.setEvents();
    this.ready();

  }

  Vimeo.prototype = {

    ready: function() {


    },

    onPause: function () {

    },

    onFinish: function () {

    },

    onPlayProgress: function (data) {

    },

    setEvents: function() {

      var self = this;

      this.player.addEvent('ready', function() {          
          self.player.addEvent('pause', onPause);
          self.player.addEvent('finish', onFinish);
          self.player.addEvent('playProgress', onPlayProgress);
      });

      this.$btn.on('click', function() {
          self.player.api('play');
      });

    },

  }

  gb.Vimeo = Vimeo;

})();