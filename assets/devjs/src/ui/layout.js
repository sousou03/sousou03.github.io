//--------------------------------------------------
//
//  layout adjust
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Adjust($target,$targetH,$targetW) {

    this.$target = $target;
    this.$targetH = $targetH;
    this.$targetW = $targetW;

  }

  Adjust.prototype = {

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

  gb.Adjust = Adjust;

})();