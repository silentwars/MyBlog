
$(function(){
            $(".news_content p:odd").addClass("p03");  //锟斤拷锟叫伙拷色锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷式P03
            
            //锟斤拷锟疥经锟斤拷锟斤拷式锟戒化锟斤拷
            $(".news_content p").hover( 
                function () { 
                    $(this).addClass("p02");   //锟斤拷锟疥经锟斤拷时锟斤拷锟斤拷锟斤拷式P02
                }, 
                function () { 
                    $(this).removeClass("p02"); //锟斤拷锟斤拷锟诫开时锟狡筹拷锟斤拷式P02
                }
            );
            
            //锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟竭匡拷锟斤拷
            $("a").focus( 
                function () { 
                    $(this).blur(); //锟矫碉拷锟斤拷锟斤拷锟斤拷失去锟斤拷锟斤拷效锟斤拷一锟斤拷
                }
             );
        });

//锟斤拷锟斤拷锟斤拷示效锟斤拷锟斤拷
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
            if(this.myTitle == "")
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
$(function(){
    sweetTitles.init();
});