//--------------------------------------------------
//
//  Size
//
//--------------------------------------------------
(function(){

  var gb = jp.co.sjPlus;

  function Size($obj,list,win,notObj,flag,notList){

    if (!notObj) {
      this.$target = $obj;  
    } else {
      this.$target = $obj.not(notObj);  
    }

    this.defList = [
              'width','height',
              'top','right','bottom','left',
              'margin-top','margin-right','margin-bottom','margin-left',
              'padding-top','padding-right','padding-bottom','padding-left',

              'background-size'
            ];

    this.list = this.defList.concat(list);
    // 重複削除
    this.list = this.list.filter(function (x, i, self) {
              return self.indexOf(x) === i;
           });
    // 対象から外す
    for (var i = 0; i < notList.length; i++) {
      for(j=0; j<this.list.length; j++){
          if(this.list[j] == notList[i]){
              this.list.splice(j--, 1);
          }
      }
    }
    this.tempList = [];
    this.len = this.list.length;

    this.win = win;
    this.defW = win.def;
    this.maxW = win.max;
    this.minW = win.min;

    if (!win.hFlag) this.W = window.innerWidth;
    else this.W = window.innerHeight;
    this.rate = this.W / this.defW;

    this.flag = flag;

    this.getDef();

  }

  Size.prototype = {

    getDef: function () {

      var self = this;

      this.$target.each(function(index) {

        self.tempList[index] = [];

        for (var i = 0; i < self.len; i++) {

          var css = $(this).css(self.list[i]);
          if (css !== '0px' && css !== 'auto') {

            if (self.flag == 'inner' && self.list[i] == 'width') {
              var val = parseInt($(this).innerWidth());
            } else {
              var val = parseInt(css);
            }

            $(this).data(self.list[i],val);
            self.tempList[index].push(self.list[i]);
          };

        };

      });

    },

    setVal: function () {

      var self = this

      this.$target.each(function(index) {

        var len = self.tempList[index].length;

        for (var i = 0; i < len; i++) {

          $(this).css(self.tempList[index][i],$(this).data(self.tempList[index][i]) * self.rate);  

        };

      });

    },

    update: function () {

      if (!this.win.hFlag) this.W = window.innerWidth;
      else this.W = window.innerHeight;

      if (this.W > this.maxW) this.W = this.maxW;
      if (this.W < this.minW) this.W = this.minW;

      this.rate = this.W / this.defW;

    },

    onResize: function () {

      this.update();
      this.setVal();

    },

    main: function () {

      this.update();
      this.setVal();

    }

  }
  // 公開api
  gb.Size = Size;

}());