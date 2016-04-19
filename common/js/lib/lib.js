/*===========================================================
	setup
	defitnition
		01-layout,style
		02-function
		03-animation
	event
===========================================================*/

/***************************************************************************************
	setup
***************************************************************************************/

	/*===========================================================
		object生成/変数設定
	===========================================================*/
	
	if(jp === undefined) var jp = {};
	if(jp.co === undefined) jp.co = {};
	if(jp.co.sample === undefined) jp.co.sample = {};

	var $window  = $(window),
		$document  = $(document),
		$body      = $('body'),
					
	var nowY = $window.scrollTop(),
	    nowX = $window.scrollLeft();
					
	var _W = $window.width(),
		_H = $window.height();

	/*===========================================================
		jqueryライブラリ機能追加
	===========================================================*/

	jQuery.fn.extend({
	  w:0, 
	  h:0, 
	  adjust: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-left':'-' + (w / 2) + 'px','margin-top':'-' + (h / 2) + 'px'});
	  },
	  adjustW: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-left':'-' + (w / 2) + 'px'});
	  },
	  adjustH: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({'margin-top':'-' + (h / 2) + 'px'});
	  }
	});

/***************************************************************************************
	definition
***************************************************************************************/
	
/*===========================================================
	layout style Module
===========================================================*/


	/*===========================================================
		layout Module
	===========================================================*/


	/*===========================================================
		style Module
	===========================================================*/



/*===========================================================
	function Module
===========================================================*/

	/*===========================================================
		browser version $ device  judge Module
	===========================================================*/
		

	/*===========================================================
		url Module
	===========================================================*/

		function urlChange() {
			
			var url = location.href;
			url = url.substring(0,url.indexOf("#"));

		}


	/*===========================================================
		hashChange Module
	===========================================================*/

		function hashChange(hash) {
			
			location.hash = hash;

		}

	/*===========================================================
		img preLoad Module
	===========================================================*/

	/*===========================================================
		consolelog Module
	===========================================================*/

		function trace() {
			if(window.console && console.log) console.log.apply(console, arguments);
		};

	/*===========================================================
		page scroll Module
	===========================================================*/

	   // #で始まるアンカーをクリックした場合に処理
	   $('a[href^=#]').click(function() {

	      var speed = 700; // ミリ秒

	      var href = $(this).attr("href");

	      var target = $(href == "#" || href == "" ? 'html' : href);

	      var position = target.offset().top;

	      $('body,html').animate({scrollTop:position}, speed, 'easeOutCubic');

	      return false;
	   });

	/*===========================================================
		RollOver Module
	===========================================================*/

		function smartRollover() {  
		    if(document.getElementsByTagName) {  
		        var images = document.getElementsByTagName("img");  
		        for(var i=0; i < images.length; i++) {  
		            if(images[i].getAttribute("src").match("_off."))  
		            {  
		                images[i].onmouseover = function() {  
		                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));  
		                }  
		                images[i].onmouseout = function() {  
		                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));  
		                }  
		            }  
		        }  
		    }  
		}  
		if(window.addEventListener) {  
		    window.addEventListener("load", smartRollover, false);  
		}  
		else if(window.attachEvent) {  //for IE
		    window.attachEvent("onload", smartRollover);  
		}


/*===========================================================
	animation Module
===========================================================*/








/****************************************************************************************
	event
****************************************************************************************/

	/*===========================================================
		directly
	===========================================================*/


	
	/*===========================================================
		onReady
	===========================================================*/

	$(function(){


	});

	/*===========================================================
		onLoad
	===========================================================*/

	 $(window).load(function() {

	 });

	/*===========================================================
		resize
	===========================================================*/
			
	$window.resize(function () {
		_W = $(window).width();
		_H = $(window).height();
		
	});

		
	/*===========================================================
		scroll event Module
	===========================================================*/
		
	$window.scroll(function () {
		_W = $(window).width();
		_H = $(window).height();
		
	});

	// sp
	$('body').on('touchmove',function(){
		_W = $(window).width();
		_H = $(window).height();

	});

	/*===========================================================
		click
	===========================================================*/
							

	