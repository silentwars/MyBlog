
window.onload=function(){
	lunbo();
};



var getEl=function(id){
	return document.getElementById(id);
};

function addEvent(ele,event,fn){
	if(ele.addEventListener){
		ele.addEventListener(event,fn,false);
	}else{
		ele.attachEvent('on'+event,fn);
	}
}





function lunbo(){
    //content中轮播图
    var container=getEl('container'),
    list=getEl('list'),
    buttons=getEl('button').getElementsByTagName('span'),
    prev=getEl('prev'),
    next=getEl('next'),
    index=1,
	    //false和true的转变,判断是否每一次都跳转完成。防止出现一直的跳跃。
	    animated=false,
	    timer=null;

			//buttons背景颜色的转换
			function showButton(){
				for(var i=0;i<buttons.length;i++){
					if(buttons[i].className=='on'){
						buttons[i].className='';
						break;
					}
				}
				buttons[index-1].className='on';
			}

			//buttons点击,通过距离计算,进行图片转换。
			for(var i=0;i<buttons.length;i++){
				addEvent(buttons[i],'click',function(){
					if (animated) {
						return;
					}
					if(this.className=='on'){
						return;
					}
					var myIndex=parseInt(this.getAttribute('index')),
					offset=-980*(myIndex-index);
					index=myIndex;
					showButton();
					if(!animated)
					{
						animate(offset);
					}	
				});

			}

			function animate(offset){
				animated=true;
				var newLeft=list.offsetLeft+offset,
				//加上动画效果
				time=600,//位移总时长
				interval=3,//位移时间间隔
				speed=offset/(time/interval);
				function go(){
					//判断未达到目标值,继续进行操作。
					if((speed<0&&list.offsetLeft>newLeft)||(speed>0&&list.offsetLeft<newLeft)){
						list.style.left=list.offsetLeft+speed+'px';
						//为了达到目标值，进行递归方法(在本身的函数中,继续调用自身函数)
						setTimeout(go,interval);
					}else{
						animated=false;
						list.style.left=newLeft+'px';
				      //判断是否到达附图，进行跳转。
				      if(newLeft>-980){
				      	list.style.left=-4900+'px';
				      }else if(newLeft<-4900){
				      	list.style.left=-980+'px';
				      }
				  }
				}
				go();	
			}
			//自动轮播函数
			function play(){
				timer=setInterval(function(){
					next.onclick();
				},5000);
			}
			//停止轮播函数
			function stop(){
				clearInterval(timer);
			}
			next.onclick=function(){
				if(!animated){
					animate(-980);
				}
				if(index==5){
					index=1;
				}else{
					index+=1;
				}		
				showButton();
			};
			addEvent(prev,'click',function(){
				if(!animated){
					animate(980);
				}
				if(index==1){
					index=5;
				}else{
					index-=1;
				}
				showButton();
			});			

			addEvent(container,'mouseout',play);
			addEvent(container,'mouseover',stop);
			//container.onmouseout=play;
			//container.onmouseover=stop;
			play();
		}


      //时间计时器(在jquery中实现，js中每调用此函数)
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
      	downtime=document.getElementById('downtime');
      	console.log(lefttime);
      	downtime.innerHTML=d+'天'+h+'时'+m+'分'+s+'秒';
      	var tiemr=null;
      	timer=setTimeout('Gundong()',1000);
      }
      function checked(i){
      	if(i<10){
      		i="0"+i;
      	}
      	return i;
      }


		/*function shareLink(){
			var share_link_list=getEl('share_link_list'),
			link_share=getEl('link_share'),
			fa_close=getEl('fa-close');
			addEvent(link_share,'click',function(){
				share_link_list.style.display='block';
			});
			addEvent(fa_close,'click',function(){
				share_link_list.style.display='none';
			});*/
