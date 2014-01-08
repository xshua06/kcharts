/*! kcharts - v1.3 - 2014-01-08 11:09:50 AM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tip/index",function(t,l,e,r,i){var n,a=t.all,s={initializer:function(){this.init()},init:function(){var l=this.userConfig,e=this,r={clsName:"ks-chart-default",autoRender:!0,isVisable:!1,boundry:{x:0,y:0,width:0,height:0},rootNode:a("body"),tpl:"",corner:{isShow:!1,tpl:"corner",css:{position:"absolute",marginLeft:0,marginTop:0}},anim:{easing:"easeOut",duration:.25},offset:{x:0,y:0},alignX:"left",alignY:"top"};e._events={MOVE:"move",SETCONT:"setcontent",HIDE:"hide"},e._cfg=t.mix(r,l,void 0,void 0,!0),e._cfg.rootNode=a(e._cfg.rootNode);var i=e._cfg;e._data={},e._tpl=i.tpl,e.bindEvent(),i.autoRender&&e.render()},bindEvent:function(){var l=this,e=l._cfg.template,r=l._events;l.on(r.MOVE,function(t){var e=t.x,r=t.y,i=t.style;l.isVisable()&&l._cfg.anim?l.animateTo(e,r):l.moveTo(e,r),i&&l.$tip.css(i)}),l.on(r.SETCONT,function(r){t.isFunction(e)?l.setContent(e(r.data)):l.renderTemplate(e,r.data)}),l.on(r.HIDE,function(){l.hide()})},getInstance:function(){return this.$tip},isVisable:function(){return"none"==this.$tip.css("display")?!1:!0},show:function(){var t=this;return t.$tip&&t.$tip.show(),t},hide:function(){var t=this;return t.$tip&&t.$tip.stop()&&t.$tip.hide(),t},moveTo:function(t,l){var e=this;e._prevtime=(new Date).getTime(),e.show();var r=e.getInstance(),i=e._cfg,n=(e._cfg.anim,e.getPos(t,l)),a=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),s=e.$corner;s&&s.css({"margin-left":a+t-n.x}),r.css({"margin-top":n.y,"margin-left":n.x})},animateTo:function(t,l,e){var r=this,i=r._cfg,n=i.anim,a=(new Date).getTime();r._prevtime&&100>a-r._prevtime&&r.animateFast(t,l,e),r.show(),r._prevtime=(new Date).getTime();var s=r.getInstance(),o=r.getPos(t,l),c=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),h=r.$corner;h&&h.css({"margin-left":c+t-o.x}),s.stop().animate({"margin-top":o.y,"margin-left":o.x},n.duration,n.easing,function(){e&&e()})},animateFast:function(t,l,e){var r,i,n=this,a=n.get("x"),s=n.get("y"),o=.2;n._prevtime=(new Date).getTime(),n.show(),void 0!==a&&(r=a/1+(t-a)*o,i=s/1+(l-s)*o);var c=n.getInstance(),h=n._cfg,x=n._cfg.anim,y=n.getPos(r,i),u=(h.corner.css["margin-top"]||h.corner.css.marginTop||0,h.corner.css["margin-left"]||h.corner.css.marginLeft||0),f=n.$corner;f&&f.css({"margin-left":u+t-y.x}),c.css({"margin-top":y.y,"margin-left":y.x});var d=n.getPos(t,l);c.stop().animate({"margin-top":d.y,"margin-left":d.x},x.duration,x.easing,function(){e&&e()})},renderTemplate:function(t,l){return this.setContent(i(t).render(l))},setContent:function(t){return a("."+this._cfg.clsName+"-tip-content",this.$tip).html(t)},getPos:function(t,l){var e=this,r=e._cfg,i=r.offset,n=l+i.y,a=t+i.x,s=r.alignX,o=r.alignY,c=e.getInstance(),h=c.outerWidth(),x=c.outerHeight(),y=r.boundry;switch(e.set("x",t||0),e.set("y",l||0),s){case"center":a=Math.round(t)+i.x-h/2;break;case"right":a=Math.round(t)+i.x-h}switch(o){case"middle":n=Math.round(l)+i.y-x/2;break;case"bottom":n=Math.round(l)+i.y-x}if(y.width&&y.height){var u=y.x||0,f=y.y||0,d=y.width,p=y.height;f>n?n=l- -Math.abs(i.y):n>f+p-x&&(n=l-x-Math.abs(i.y)),u>a?a=t- -Math.abs(i.x):a>u+d-h&&(a=t-h-Math.abs(i.x))}return{x:a,y:n}},_isExist:function(){return this.$tip&&this.$tip[0]},render:function(){var t=this,l=t._cfg,e=t._tpl,r=t._data,i=l.isVisable?"inline-block":"none",n=l.rootNode.offset();return l.rootNode.offset()?(t.$tip=!t._isExist()&&a('<span class="'+l.clsName+'-tip" style="*zoom:1;"><span class="'+l.clsName+'-tip-content"></span></span>').css({display:i}).appendTo(l.rootNode),t.$corner=l.corner.isShow&&l.corner.tpl?a("<div class='"+l.clsName+"-corner'>"+l.corner.tpl+"</div>").css(l.corner.css).appendTo(t.$tip):void 0,t.$tip.css({"margin-top":n.top+l.offset.y,"margin-left":n.left+l.offset.x,position:"absolute"}),t.renderTemplate(e,r),t.$tip):!1}};return e.extend?n=e.extend(s):(n=function(t){t&&(this.userConfig=t,this.init())},t.extend(n,e,s)),n},{requires:["node","base","anim","gallery/template/1.0/index","./assets/tip.css"]});