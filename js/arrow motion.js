window.onload=function(){
	index();
};

function index(){
	//箭头图片的运动
	var iNner=document.getElementById('inner');
	var angleDonw=iNner.getElementsByTagName('i');
	for(var i=0;i<angleDonw.length;i++){
		startMove1(angleDonw[i]);
	}
	
	
	//MENU的鼠标移入、移出。
	/*var logoMenu=document.getElementById('logo_menu');
	var hidelog=document.getElementById('hideLog');
	logoMenu.onmouseover=function(){
		hidelog.style.display='block';
	};
	logoMenu.onmouseenter=function(){
		hidelog.style.display='block';
	};

	hidelog.onmouseleave=function(){
		this.style.display='none';
	};*/
}
  //箭头图标获取
  function startMove1(obj){
  	obj.timers=null;
  	obj.timers=setInterval(function(){
  		startMove(obj,{top:50,opacity:0.2},function(){
  			obj.style.top=0;
  			obj.style.filter='alpha(opacity:80)';
  			obj.style.opacity=0.8;
  		});
  	},1000);}

   //封装好的运动框架
   function getStyle(obj,attr){
   	if(obj.currentStyle){
  		return	obj.currentStyle[attr];//针对IE浏览器
  	}else{
  		return getComputedStyle(obj,false)[attr];//针对firefox浏览器
  	}
  }

  function startMove(obj,json,Fn){
  	clearInterval(obj.timer);
  	obj.timer=setInterval(function(){
				//要放在计时器中，放在外面经过一次之后flag=false，下一次循环时就不会变为true，在其后加上链式运动就会触发。
				var flag=true;
				for(var attr in json){
				//1、去当前的值；
				var iccu=0;
				if(attr =='opacity'){
					iccu=Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					iccu=parseInt(getStyle(obj,attr));
				}
	            //2、算速度
	            var speed=(json[attr]-iccu)/60;
	            speed=speed>0?Math.ceil(speed):Math.floor(speed); 
	            //3、检测停止；
	            if(iccu!=json[attr]){
	            	flag=false;
	            }	            
	            if(attr =='opacity'){
	            	obj.style.filter='alpha(opacity:'+(iccu+speed)+')';
	            	obj.style.opacity=(iccu+speed)/100;
	            }
	            else{
	            	obj.style[attr]=iccu+speed+'px';
	            }				
	            if(iccu==json[attr]){
	            	flag=true;
	            }
	            if(flag){
	            	clearInterval(obj.timer);
	            	if(Fn){
	            		Fn();
	            	}
	            }

	        }
	    },30);

  }