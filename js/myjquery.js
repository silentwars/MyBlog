/*使用jquery编写的*/
$(function(){
 'use strict';
  	        //侧栏sidebar的移入和移出
  	        var sidebar=$('#sidebar'),
  	        mask=$('.mask'),
  	        back_top=$(".back_to_top"),
  	        sidebar_trigger=$('.sidebar_trigger');
  	        function showsidebar(){
  	        	mask.fadeIn();
  		        //css:trasition的方法。
  		        sidebar.css('right',0); /*sidebar.animate({right:0});*/
            }
            function hidesidebar(){
             mask.fadeOut();
             sidebar.css('right',-sidebar.width()/*写成灵活的形式*/);/*sidebar.animate({right:-300});*/
           }
  	        sidebar_trigger.on('mouseenter',showsidebar);//监听事件
  	        sidebar.on('mouseleave',hidesidebar);
  	        /*返回顶部*/
  	        back_top.on('click',function(){
  	        	$('html,body').animate({scrollTop:0},1000);
  	        });
  	        $(window).on('scroll',function(){
  		        //判断条件，滚动的高度和窗口的高度
  		        if($(window).scrollTop()>$(window).height()){
  		        	back_top.fadeIn();
  		        }else{
  		        	back_top.fadeOut();
  		        }
            });
  	//在每一个匹配的元素上触发某类事件。一加载就触发。
  	$(window).trigger('scroll');


  	//content鼠标经过，图片的变化。
  	var imgOn=$(".imgOn"),
  	wValue=1.1*imgOn.width(),
  	hValue=1.2*imgOn.height(),
  	list_li=$(".list_li");
  	list_li.each(function() {
  		$(this).bind("mouseenter",navEnter);
  		$(this).bind("mouseleave",navLeave);
  	}); 


  	function navEnter(){
  		$(this).find(".imgOn").stop().animate({height:hValue,width:wValue,left:("-"+(0.1* imgOn.width())/2), top:("-"+(0.2* imgOn.height())/2)},500);
  		$(this).css({"border":"1px solid red"});
  	}
  	function navLeave(){
  		$(this).find(".imgOn").stop().animate({height: '110px', width:'184px',left:'0px',top:'0'},500);
  		$(this).css({"border":"1px solid #ADA4A4"});

  	}






         //js的阻止事件冒泡
         /*function stopPropagation(e) {  
          e = e || window.event;  
         if(e.stopPropagation) { //W3C阻止冒泡方法  
           e.stopPropagation();  
         } else {  
            e.cancelBubble = true; //IE阻止冒泡方法  
          }  
        } */

        //阻止默认事件
        /*function stopDefault(e){
          if(e&&e.stopDefault){
            e.stopDefault();
          }else{
            window.event.returnValue=false;
            return false;
          }
        }*/

         //点击分享事件和关闭事件
         var share_link_list=$('#share_link_list'),
         link_share=$('#link_share'),
         fa_close=$('#fa-close');
         link_share.bind('click',function(e){
          share_link_list.css({'display':'block'});
          if(e&&e.stopPropagation){
            e.stopPropagation();
          }else{
            window.event.cancelBubble=true;
          }
          
        });
         fa_close.bind('click',function(e){
          share_link_list.css({'display':'none'});
          if(e&&e.stopPropagation){
            e.stopPropagation();
          }else{
            window.event.cancelBubble=true;
          }
        });
         $("body").bind('click',function(){
          share_link_list.css({'display':'none'});
        });



         //recommend推荐转换
         var recd_title=$(".recommend_title"),
         recd_left=$(".recommend_left"),
         recd_right=$(".recommend_right"),
         recd_title_right=$(".recommend_title_right"),
         recd_title_left=$('.recommend_title_left');


         recd_title_right.bind('click',function(){
          if($(this).className!=='re_active'){
            recd_left.stop().animate({'left':'-384'},1000);
            recd_right.stop().animate({'left':'0'},1000);
            recd_title.children("li:first").removeClass('re_active');
            $(this).addClass('re_active');
          }
        });


         recd_title_left.bind('click',function(){
          if($(this).className!=='re_active'){
           recd_left.stop().animate({'left':'0'},1000);
           recd_right.stop().animate({'left':'384'},1000);
           $(this).addClass('re_active');
           recd_title.children("li:last").removeClass('re_active');
         }
         
       });


       }); 


$(function(){
  sweetTitles.init();
  Gundong();
});




function Gundong(){
  var curtime=new Date(), 
  endtime=new Date("2017,12,31"),
  lefttime=parseInt(((endtime.getTime()-curtime.getTime())/1000)),
  d=parseInt(lefttime/(60*60*24)),
  h=parseInt(lefttime/(60*60)%24),
  m=parseInt(lefttime/60%60),
  s=parseInt(lefttime%60);
  m=checked(m);
  s=checked(s);
  var downtime=$('#downtime');
  downtime.html(d+'天'+h+'时'+m+'分'+s+'秒');
  var timer=null;
  timer=setTimeout('Gundong()',1000);
}
function checked(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}

//tooltip 标题显示
var sweetTitles = {
  x : 10, 
  y : 20, 
  tipElements : "a",
  init : function() {
    $(this.tipElements).mouseover(function(e){
      this.myTitle = this.title;
      this.myHref = this.href;
      this.myHref = (this.myHref.length > 200 ? this.myHref.toString().substring(0,200)+"..." : this.myHref);
      this.title = "";
      var tooltip = "";
      if(this.myTitle === "")
      {
        tooltip = "";
      }
      else
      {
        tooltip = "<div id='tooltip'><p>"+this.myTitle+"</p></div>";
      }
      $('body').append(tooltip);
      $('#tooltip')
      .css({
        "opacity":"1",
        "top":(e.pageY+20)+"px",
        "left":(e.pageX+10)+"px"
      }).show('fast');    
    }).mouseout(function(){
      this.title = this.myTitle;
      $('#tooltip').remove(); 
    }).mousemove(function(e){
      $('#tooltip')
      .css({
        "top":(e.pageY+20)+"px",
        "left":(e.pageX+10)+"px"
      });
    });
  }
};












