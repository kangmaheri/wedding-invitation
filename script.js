!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=73)}({73:function(e,t,n){e.exports=n(74)},74:function(e,t){var n=tanggal_mulai,a=waktu_mulai,o=formatDate(n)+" "+a;window.onload=function(){$(".preloader").hide()},AOS.init(),1==aktifGaleri&&0!=countGaleri&&$(".gallery a").simpleLightbox({docClose:!1,disableScroll:!0,disableRightClick:!0});var i=new Date(o).getTime(),r=setInterval((function(){var e=(new Date).getTime(),t=i-e,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),o=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3);document.getElementsByClassName("days")[0].innerHTML=n,document.getElementsByClassName("hours")[0].innerHTML=a,document.getElementsByClassName("minutes")[0].innerHTML=o,document.getElementsByClassName("seconds")[0].innerHTML=l,t<0&&(clearInterval(r),document.getElementsByClassName("expired").innerHTML="EXPIRED")}),1e3);window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),$(document).ready((function(){$("#stopIcon").show()})),window.simpanBukuTamu=function(){"preview"!=$("#segment").val()&&$("#submitBukuTamu").submit()},window.submitPayment=function(){$("#formpayment").submit(),"preview"!=$("#segment").val()&&$("#formpayment").submit()},window.changeFormat=function(){var e=$("#jumlah").val(),t=replaceAll(e,"Rp. ",""),n=replaceAll(t,".","");$("#nominal").val(n);var a=formatRupiah2(e,"Rp. ");$("#jumlah").val(a)},$("#bank").on("change",(function(){var e="No Rekening : <b>"+$(this).val()+"</b>&nbsp;&nbsp;";$("#norek").html(e)})),window.copyToClipboard=function(){var e=document.getElementById("copyLink");e.select(),navigator.clipboard.writeText(e.value)},window.audio_play_pause=function(){var e=document.getElementById("player");e.paused?($("#playIcon").hide(),$("#stopIcon").show(),e.play()):($("#playIcon").show(),$("#stopIcon").hide(),e.pause())},1==aktifCeritaCinta&&$(".cerita-carousel").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1,stagePadding:10},1e3:{items:1,stagePadding:50}}}),1==aktifQuote&&$(".quote-carousel").owlCarousel({loop:!0,margin:10,nav:!0,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1,stagePadding:10},1e3:{items:1,stagePadding:50}}})}});