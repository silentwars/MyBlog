  //加上border等的变化，封装好的函数，为获取行内样式。
  //使用offsetLeft、Width等就会产生bug(内容的的改变)，使用getStyle可以克服这个问题。
  function getStyle(obj,attr){
  	if(obj.currentStyle){
  		return	obj.currentStyle[attr];//针对IE浏览器
  	}else{
  		return getComputedStyle(obj,false)[attr];//针对firefox浏览器
  	}
  }
      //startMove(obj,{attr1:itarget1,attr2:itarget2})

		function startMove(obj,json,Fn){//多传一个参数,以便知道是哪一个aLi[i]
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				//要放在计时器中，放在外面经过一次之后flag=false，下一次循环时就不会变为true，在其后加上链式运动就会触发。
				var flag=true;
				for(var attr in json){
				//1、去当前的值；
				var iccu=0;
				if(attr =='opacity'){//通过判断来实现是透明度，还是宽度等。
					iccu=Math.round(parseFloat(getStyle(obj,attr))*100);//parseFloat取得的是浮点数，在Itarget时会有浮点数的影响。可以通过四舍五入round来解决。
				}
				else{
					iccu=parseInt(getStyle(obj,attr));
				}
	            //2、算速度
	            var speed=(json[attr]-iccu)/30;
	            speed=speed>0?Math.ceil(speed):Math.floor(speed); 
	            //3、检测停止；
	            if(iccu!=json[attr]){//假设所有的运动有未到达目标值的。
	            	flag=false;
	            }	            
					if(attr =='opacity'){//相同的判断，添加的透明度的问题。
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



		