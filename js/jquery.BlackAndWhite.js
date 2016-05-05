/**
*
* Version: 0.3.7
* Author:  Gianluca Guarini
* Contact: gianluca.guarini@gmail.com
* Website: http://www.gianlucaguarini.com
* Twitter: @gianlucaguarini
*
* Copyright (c) Gianluca Guarini
*/
!function(a){a.fn.extend({BlackAndWhite:function(b){"use strict";var c=this,d=a.extend({hoverEffect:!0,webworkerPath:!1,invertHoverEffect:!1,speed:500,onImageReady:null,intensity:1},b),e=d.hoverEffect,f=d.webworkerPath,g=d.invertHoverEffect,h="number"==typeof d.intensity&&d.intensity<1&&d.intensity>0?d.intensity:1,i=a.isPlainObject(d.speed)?d.speed.fadeIn:d.speed,j=a.isPlainObject(d.speed)?d.speed.fadeOut:d.speed,k=a(window),l=".BlackAndWhite",m=(document.all&&!window.opera&&window.XMLHttpRequest?!0:!1," -webkit- -moz- -o- -ms- ".split(" ")),n={},o=function(a){if(n[a]||""===n[a])return n[a]+a;var b=document.createElement("div"),c=["","Moz","Webkit","O","ms","Khtml"];for(var d in c)if("undefined"!=typeof b.style[c[d]+a])return n[a]=c[d],c[d]+a;return a.toLowerCase()},p=function(){var a=document.createElement("div");return a.style.cssText=m.join("filter:blur(2px); "),!!a.style.length&&(void 0===document.documentMode||document.documentMode>9)}(),q=!!document.createElement("canvas").getContext,r=function(){return"undefined"!=typeof Worker?!0:!1}(),s=o("Filter"),t=[],u=r&&f?new Worker(f+"BnWWorker.js"):!1,v=function(b){a(b.currentTarget).find(".BWfade").stop(!0,!0).animate({opacity:g?0:1},j)},w=function(b){a(b.currentTarget).find(".BWfade").stop(!0,!0).animate({opacity:g?1:0},i)},x=function(a){"function"==typeof d.onImageReady&&d.onImageReady(a)},y=function(a){u&&q&&!p&&!a&&z()},z=function(){return t.length?(u.postMessage({imgData:t[0].imageData,intensity:h}),void(u.onmessage=function(a){t[0].ctx.putImageData(a.data,0,0),x(t[0].img),t.splice(0,1),z()})):(u.terminate&&u.terminate(),void(u.close&&u.close()))},A=function(a){return a.complete||"undefined"!=typeof a.naturalWidth&&a.naturalWidth},B=function(a,b,c,d){var e=b.getContext("2d"),f=0;e.drawImage(a,0,0,c,d);var g=e.getImageData(0,0,c,d),i=g.data,j=i.length;if(u)t.push({imageData:g,ctx:e,img:a});else{for(;j>f;f+=4){var k=.3*i[f]+.59*i[f+1]+.11*i[f+2];i[f]=~~(k*h+i[f]*(1-h)),i[f+1]=~~(k*h+i[f+1]*(1-h)),i[f+2]=~~(k*h+i[f+2]*(1-h))}e.putImageData(g,0,0),x(a)}},C=function(b,c){var d,e=b[0],f=(e.src,b.position()),i={top:f.top,left:f.left,position:"absolute","-webkit-transform":"translate3d(0,0,0)",opacity:g?0:1};e.crossOrigin="anonymous",q&&!p?(d=a('<canvas width="'+e.naturalWidth+'" height="'+e.naturalHeight+'" class="BWfade"></canvas>'),i.width=b.width(),i.height=b.height(),B(e,d.get(0),e.naturalWidth,e.naturalHeight)):(q?i[s]="grayscale("+100*h+"%)":i.filter="progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",d=b.clone().addClass("BWFilter BWfade"),x(e)),d.css(i).prependTo(c),!a.support.opacity&&g&&d.animate({opacity:0},0)},D=function(){c.each(function(b,c){var d=a(c).find("img"),e=a(d).width(),f=a(d).height();a(this).find("canvas").css({width:e,height:f})})},E=function(){var b=c.find("img").filter(function(){return!a(this).data("_b&w")}).length;c.each(function(c,d){var e=a(d),f=e.find("img");f.data("_b&w")||(A(f[0])?(b--,C(f,e)):f.on("load",function(){return f.data("_b&w_loaded")||!f[0].complete?void setTimeout(function(){f.load()},20):(C(f,e),f.data("_b&w_loaded",!0),b--,void y(b))}).load(),f.data("_b&w",!0))}),y(b),e&&c.unbind(l).on("mouseleave"+l,v).on("mouseenter"+l,w),q&&!p&&k.unbind(l).on("resize"+l+" orientationchange"+l,D)},F=function(){c.off(l),k.off(l)};return E(),{destroy:F}}})}(jQuery);