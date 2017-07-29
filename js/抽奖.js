/*   var data=['惠普笔记本','Iphone5','Ipad','佳能相机','谢谢参与','50元充值卡','三星笔记本','惠普打印机'],
     timer=null,
     flag=0;

     window.onload=function(){
     	var start=document.getElementById('start'),
     	end=document.getElementById('end');
     	start.onclick=startGame;
     	end.onclick=endGame;
     };


     function startGame(){
     	var title=document.getElementById('title'),
     	start=document.getElementById('start');
     	clearInterval(timer);
     	timer=setInterval(function(){
	//这里注意随机数取下标的方法
	var random=Math.floor(Math.random()*data.length);
	title.innerHTML=data[random];

},50);
     	start.style.background='#999';
     	flag=1;
     }

     function endGame{
     	var start=document.getElementById('start');
     	clearInterval(timer);
     	start.style.background='#036';
     	flag=0;
     }
     */

     var data=['惠普笔记本','Iphone5','Ipad','佳能相机','谢谢参与','50元充值卡','三星笔记本','惠普打印机'];
     var timer=null;
     var flag=0;



     window.onload=function(){

     	var start=document.getElementById('start'),
     	end=document.getElementById('end');
     	start.onclick = startGame;
     	end.onclick = endGame;


     	var luck_draw=document.getElementById('luck_draw');
     	var spans=luck_draw.getElementsByTagName('span');
     	var randoms=Math.floor(Math.random()*spans.length);
     	var index=randoms;
     	var play=document.getElementById('play');
     	var stop=document.getElementById('stop');
     	play.onclick=playFun;
     	stop.onclick=stopFun;
     	spans[index].className='active';


     	document.onkeyup=function(event){
     		event=event||window.event;
     		if(event.keyCode==13){
     			if(flag===0){
     				startGame();			
     			}
     			else{
     				endGame();
     			}
     		}

     		if(event.keyCode==32){
     			if(flag===0){
     				playFun();			
     			}
     			else{
     				stopFun();
     			}
     		}

     	};


     	function playFun(){
     		var randoms2=Math.floor(Math.random()*spans.length);
     		var t=randoms2;
     		clearInterval(timer);
     		timer=setInterval(function(){

     			if(t<=30){
     				if(index<7){		
     					index+=1;			
     					spans[index-1].className='former';
     					spans[index].className='active';
     					t=t+1;						
     				}else if(index=7){
     					spans[7].className='former';
     					spans[0].className='active';
     					index=0;
     				}

     			}else{
     				clearInterval(timer);
     			}

     		},300);

     	}
     	function stopFun(){
     		clearInterval(timer);
     	}

     	function startGame(){
     		var title=document.getElementById('title'),
     		start=document.getElementById('start');
     		clearInterval(timer);
     		timer=setInterval(function(){
	    //这里注意随机数取下标的方法
	    var random=Math.floor(Math.random()*data.length);
	    title.innerHTML=data[random];

	},50);
     		start.style.background='#999';
     		flag=1;
     	}

     	function endGame(){
     		var start=document.getElementById('start');
     		clearInterval(timer);
     		start.style.background='#036';
     		flag=0;
     	}

     };







