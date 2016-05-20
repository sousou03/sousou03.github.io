//--------------------------------------------------
//
//  position center
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function PosCenter($target,$targetH,$targetW) {

    this.$target = $target;
    this.$targetH = $targetH;
    this.$targetW = $targetW;

    this.onLoad();

  }

  PosCenter.prototype = {

    onLoad: function() {

      this.$target.each(function(index, el) {
        $(this).adjust();
      });
      this.$targetH.each(function(index, el) {
        $(this).adjustH();
      });
      this.$targetW.each(function(index, el) {
        $(this).adjustW();
      });

    },

    onResize: function() {

      this.onLoad();

    },

  }

  gb.PosCenter = PosCenter;

})();