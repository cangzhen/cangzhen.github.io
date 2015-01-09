;(function($){
    $.popup=function(json){
        if (!$.isJson(json) ) return;
        this.init = function(jsonc){
            this.json=jsonc;
            this.box = $('<div class="popupBox"></div>');
            this.con = $('<div class="popupCon"></div>');
            this.cons = $('<div class="popupContent" >'+(this.json.content?this.json.content:" ")+'</div>')
            this.close = $('<div class="closeBtn"><span>x</span></div>');
            this.head = $('<div class="popupHead" ><h1 class="tit">'+ ( this.json.title ? this.json.title : "" )+'</h1> </div> ');
            this.footerBtn = $('<div class="popupFooter"></div>');
            this.footerBtns= $('<div class="btnFooter"></div>');
            this.show()
        }
        this.show=function(){
            var self = this;
            this.con.append(this.close,this.head,this.cons,this.footerBtn.append(this.footerBtns))

            $('body').append(this.box.append(this.con));

            this.offsetBox();

            this.close.click(function(){
                self.closeBox()
            })

            this.box.click(function(){
                self.boxZindex(this);
            })

            if (this.json.button&&this.json.button.length>0) {
                $.each(this.json.button,function(idx,item){
                    self.footerBtns.append($("<input>").attr({
                        "type":item.type&&item.type=="submit"?"submit":"button",
                        "class":"btn",
                        "value":item.value
                    }).click(function(){
                        if (!item) return;
                        (item.click && $.isFunction(item.click))?item.click():null;
                        if (item.type&&(item.type=="close")) {
                            self.closeBox()
                        };
                    }))
                })
            };
            this.json.event?this.json.event():null;
        }
        this.closeBox=function(){
            this.box.remove()
        }

        this.boxZindex=function(obj){
            $('.popupBox').css({'z-index':1,"position": "fixed"});
            $(obj).css('z-index',999);
        }

        this.offsetBox = function(){
            var arr=this.json.offset;
            !arr?arr={}:null;
            if (!arr || !arr.width) {arr.width=100; };
            if (!arr || !arr.height) {arr.height=50; };

            this.cons.css({
                "width":arr.width+'px',
                "height":arr.height+'px'
            });

            if (!arr || !arr.top) {
                arr.top=($(window).height()/2 - this.con.offset().height/2);
            };
            if (!arr || !arr.left) {
                arr.left=($(window).width()/2 - arr.width/2);
            };
            
            this.con.css({
                "top":arr.top+'px',
                "left":arr.left+'px'
            });

            if(!this.json.title) {
                this.head.remove();
            }else{
                this.MovePopup(this.head);
            }

            if (!this.json.button) {
                this.footerBtn.remove();
            };
            if (this.json.iframe) {
                var loading = $('<div class="popupLoading"> <div class="popupLoading1"></div> <div class="popupLoading2"></div> <div class="popupLoading3"></div> </div>').appendTo(this.head[0]);
                $('<iframe></iframe>').attr({
                    'frameborder':0,
                    'src':this.json.iframe,
                    'width':'100%',
                    'height':'100%'
                }).appendTo(this.cons.empty().css('overflow','hidden')[0]).load(function(){
                    loading.remove();
                });
            };

            if (this.json.layer) {
                this.box.css({
                    "position": "fixed",
                    "background": "rgba(0,0,0,0.3)",
                    "width": "100%",
                    "height": "100%",
                    "top": 0,
                    "left": 0
                })
            };
        }

        this.MovePopup = function(_this){
            if(typeof(_this)=='object') _this=_this;
            else _this=$(_this);
            if(!_this){return false;}
            var x,y,thisP,self=this;
            _this.mousedown(function(e){
                self.boxZindex(self.box[0]);
                thisP = this;
                var offset = $(this).offset();
                x = e.pageX - offset.left;
                y = e.pageY - offset.top;
                $(document).bind("mousemove",moveCon);
            }).mouseup(function(){
                $(document).unbind("mousemove",moveCon);
            });
            $(document).mouseup(function(){
                console.log('222')
                $(document).unbind("mousemove",moveCon);
            })

            function moveCon(ev){
                $(thisP).bind('selectstart',function(){return false;});
                var _x,_y,st,sl;
                st=document.body.scrollTop;
                sl=document.body.scrollLeft;
                _x =(ev.pageX - x)>0 ? ev.pageX - x - sl : 0;
                _y =(ev.pageY - y)>0 ? ev.pageY - y - st : 0;
                var m=self.con;
                m.length<0 ? m=$(thisP):null;

                _x>($(window).width()-m.offset().width)?_x=($(window).width()-m.offset().width):null;
                _y>($(window).height()-m.offset().height)?_y=($(window).height()-m.offset().height):null;
                m.css({"position":"fixed",'left':_x+"px",'top':_y+"px"});
            };
        };
        this.init(json);
    }
})(JSLite);