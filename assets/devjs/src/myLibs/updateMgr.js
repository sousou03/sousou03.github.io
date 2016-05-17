//--------------------------------------------------
//
//  updateManager
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function updateMgr() {

    this.cnt = 0;
    this.updateList = [];
    this.len = 0;
    this.Timer = null;
    this.isStop = false;

  }

  updateMgr.prototype.setup = function() {

    for (var i in this.updateList) this.updateList[i].setup();

  };

  updateMgr.prototype.update = function() {

    for (var i in this.updateList) this.updateList[i].loop();

  };

  updateMgr.prototype.loop = function() {

    var self = this;

    this.update();
    this.cnt++;

    this.Timer = requestAnimationFrame(function(){

      self.loop.call(self);

    });

    console.log('loop');


  };

  updateMgr.prototype.stop = function() {

    cancelAnimationFrame(this.Timer);

  };

  updateMgr.prototype.resume = function() {

    this.loop();

  };

  updateMgr.prototype.add = function(func) {

    this.updateList.push(func);
    
  };

  updateMgr.prototype.remove = function(target) {

    this.updateList = updateMgr.arrRemove(this.updateList, target);

  };

  updateMgr.arrRemove = function(arr , target) {

    var len = arr.length;
    var check ;
    for( i = 0 ; i < len; i++ ) {
      check = arr[ i ];

      if( check.name == target.name ){
        arr.splice( i , 1 ) ;
        i--;
        len--;
      }
    }

    return arr;
  };

  // 公開api
  gb.updateMgr = updateMgr;
  
})();