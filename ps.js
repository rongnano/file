var $e={cat:function(a){a=a.split("<br/>");for(var c in a)a[c]='<font data-print="'+c+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">'+a[c]+"</font>";return a=a.join("<br/>")},del:function(a){a=a||window.event;var c=a.target||a.srcElement,f=window.getSelection().getRangeAt(0).startOffset;if(46==a.keyCode&&f==c.innerText.length&&$g.kdit==md5(c.innerText)){a=$.$t("gtext","font");var f=$.$t("gtext","br"),b=a.length,e=0,d;for(d in a)if("edit"==a[d].className){e=d;break}for(e=
+e+1;e<b;)if("none"!=a[e].className){c.innerHTML+=" "+a[e].innerText;a[e].className="none";f[e-1].className="none";"undefined"!=typeof f[e+1]&&(f[e+1].className="none");break}else e++}},nex:function(a){var c=$.l().split("#id=")[1].split("&ip=")[0],f=+$.l().split("&ip=")[1],b=$.s("off");if(b&&39<c.length&&5E3>f){var e=function(a){a=$g.ga+"chaps&vip="+md5(c+a).slice(-7)+"&sky="+c+"&call=pow.jon&back=0&column=1&columns=2&index="+a+"&results=1";var f="o."+md5(a).slice(-7),e=f.slice(-5);0<=b.indexOf(e)?
($g.off=-1,alo.$(a,f,"1",24E3)):$a.meo("B\u1ea1n vui l\u00f2ng k\u1ebft n\u1ed1i Internet!",3E3)};2==a?(location.href=$.l().split("&ip=")[0]+"&ip="+(f+1),e(f+1)):1==a?(location.href=$.l().split("&ip=")[0]+"&ip="+(f-1),e(f-1)):$a.meo('K\u1ebft n\u1ed1i Internet c\u1ee7a b\u1ea1n \u0111\u00e3 b\u1ecb ng\u1eaft.<br/>B\u1ea1n c\u00f3 th\u1ec3 nh\u1ea5n "Next" ho\u1eb7c "Back" \u0111\u1ec3 \u0111\u1ecdc 12 Ch\u01b0\u01a1ng k\u1ebf ti\u1ebfp \u0111\u01b0\u1ee3c <u>l\u01b0u d\u1ef1 ph\u00f2ng khi b\u1ecb ng\u1eaft k\u1ebft n\u1ed1i</u>.<br/>N\u00f3 s\u1ebd b\u1ecb x\u00f3a m\u1ea5t n\u1ebfu b\u1ea1n t\u1eaft ho\u1eb7c refresh trang web n\u00e0y.',
2E4)}},off:function(a){var c=$.l().split("#id=")[1].split("&ip=")[0],f=+$.l().split("&ip=")[1],b=$.s("off");if(39<c.length&&5E3>f){var e=function(a){return $g.ga+"chaps&vip="+md5(c+a).slice(-7)+"&sky="+c+"&call=pow.jon&back=0&column=1&columns=2&index="+a+"&results=1"};if(1>a){a=localStorage;var d=e(f),g="o."+md5(d).slice(-7),h=g.slice(-5)+".";if(0>(b?b.indexOf(h):-1))for(var k in a)"o"==k[0]&&0>k.indexOf(g)&&a.removeItem(k);else{f=Math.floor((new Date).getTime()/1E3);d=[];for(k in a)"o"==k[0]&&2<
k.indexOf("-")&&(e=k.split("-"),+e[1]>f?d.push(e):a.removeItem(k));var d=d.sort(function(a,b){return a[1]===b[1]?0:a[1]<b[1]?-1:1}),n;for(n in d)if(g==d[n][0])break;else a.removeItem(d[n].join("-"));h+=b.split(h)[1]}$.ss("off",h,30);navigator.onLine&&setTimeout(function(){$e.off(1)},12E4)}else if(b)for(h=g=d="",k=0;7>k;k++)if(d=e(f+k+1),g=md5(d),h=g.slice(-5)+".",0>b.indexOf(h)){$g.off=1;alo.$(d,"o."+g.slice(-7),"1",86400,function(){$.ss("off",b+h,30);setTimeout(function(){navigator.onLine&&$e.off(1)},
12E4)});break}}},dan:function(a){a.preventDefault();a=(a.originalEvent||a).clipboardData.getData("text/plain");document.execCommand("insertText",!1,a)},dit:function(a,c,f){var b=a.className;if("0"==c&&""==b)$p.prt();else if("2"==c&&"true"!=f&&0<$g.go){var e=$.l().split("#id=")[1].split("&ip=")[0],d=$.l().split("&ip=")[1];if(39<e.length&&5E3>+d)if(c=md5(a.innerText),""==b){var b=$.$t("gtext","font"),g;for(g in b)"edit"==b[g].className&&(b[g].className="",b[g].addEventListener("keyup",$e.del),b[g].removeEventListener("paste",
$e.dan));a.oncontextmenu=function(){return!1};$.$("gtext").onselectstart=function(){return!0};a.addEventListener("keyup",$e.del);a.addEventListener("paste",$e.dan);$g.kdit=c;$g.edit=a.innerText.replace(/\n/mg,"(*...*)");a.className="edit";a.contentEditable=!0;a.designMode="on";$a.meo("Nh\u1ea5n chu\u1ed9t ph\u1ea3i sau khi s\u1eeda xong l\u1ed7i ch\u00ednh t\u1ea3. C\u1ea3m \u01a1n!",3E4)}else $.$("gtext").onselectstart=function(){return!1},a.removeEventListener("keyup",$e.del),a.removeEventListener("paste",
$e.dan),a.classList.remove("edit"),a.contentEditable=!1,a.designMode="off",c!=$g.kdit&&(clearTimeout($g.meo),$g.meo=setTimeout(function(){var b=$.$t("gtext","font"),c=b.length,g=0,l;for(l in b)"none"==b[l].className&&($g.edit+="(*...*)"+b[l].innerText,g++);var m=a.innerText.replace(/\n/mg,"(*...*)");if(0<m.indexOf("(*...*)")){var m=m.split("(*...*)"),p;for(p in m)m[p]=m[p].trim();m=m.join("(*...*)")}l=$.s("sky")?$.s("sky"):0;b=md5($g.kdit+e+d+f+g+c);c=iylee.e+"&pky="+l+"&id="+e+"&ip="+d+"&pp="+f+
"&bp="+g+"&len="+c+"&link="+$.r($.l())+"&title="+$.r($.$i("ititle"))+"&old="+$.r($g.edit)+"&wow="+$.r(m)+"&cache="+b.slice(-12);alo.$($g.ga+"edits&vip="+b.slice(-7)+"&sky="+c,"edit",null,null,function(){$a.meo('\u0110\u00e3 g\u1eedi y\u00eau c\u1ea7u: (<a href="'+iylee.h+'?admin=spellcheck" target="_blank">xem l\u1ea1i</a>)<br/>M\u1edbi: <span>'+(77<m.length?m.slice(0,77).replace(/\(\*\.\.\.\*\)/mg,"<br/>")+"..":m)+'</span><br/>C\u0169: <span class="d">'+(77<$g.edit.length?$g.edit.slice(0,77).replace(/\(\*\.\.\.\*\)/mg,
"<br/>")+"..":$g.edit)+"</span>",5E3);setTimeout(function(){$a.meo("C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 gi\u00fap b\u1ed9 truy\u1ec7n n\u00e0y \u0111\u1ecdc hay h\u01a1n!",3E3)},6E3)})},500)),$a.meo(0,0),$g.kdit=""}}},$p={hom:function(){if(0<$g.go){var a=$.l().split("#id=")[1].split("&ip=")[0],c=$.l().split("&ip=")[1],f="";39<a.length&&5>c.length&&5E3>+c?(f=$g.ga+"chaps&vip="+md5(a+c).slice(-7)+"&sky="+a+"&call=pow.jon&back=0&column=1&columns=2&index="+c+"&results=1",alo.$($g.no,"a.google","1",
null,function(){alo.$(f,"o."+md5(f).slice(-7),"1",$g.zo)})):(f=iylee.h+"feeds/posts/default/"+($.s(iylee.i)?$.s(iylee.i):c)+"?alt=json-in-script&callback=pow.jon",alo.$(f,"f."+md5(f).slice(-7),"1",1800))}else var b=setInterval(function(){99<$g.k&&$.$("bodyp")&&(clearInterval(b),$p.pod())},100)},pod:function(){for(var a=$.$t("bodyl","a"),c=[],f=0;f<a.length;f++)c.push(a[f].innerHTML);$p.jag(["","","",c,"",$.$("bodyt").innerHTML,$.$("bodyp").innerHTML,"","","",""]);$.$("bodyp").innerHTML=""},jag:function(a){if(0>
$g.off)window.scrollTo(0,0),$.$("ititle").innerHTML="[OFFLINE] "+a[5]+" [OFFLINE]",$.$("ipost").innerHTML='<div id="gtext" data-print="true">'+(0<$g.mo?a[6]:$e.cat(a[6])).replace(/\u201d/mg,'"').replace(/\u2019/mg,"'")+"</div>",$p.lab(a[3]),navigator.onLine&&$e.off(1);else if(1>$g.off&&$.$("ititle")){var c=0;$.$s("content").backgroundImage="none";setTimeout(function(){$.$("ititle")&&1>$.$("ititle").innerHTML.length&&location.reload(!0)},12E3);$.$("ititle").innerHTML=a[5];var f=(a[6].match(/<img\b[^>]*>/img)||
[]).length,b="",e=$.te(a[6]).trim().length;6<f&&255>e?(c=1,$.$ca($.$("content"),"ifull"),$.$ca($.$("gaia"),"gaia"),$.$ca($.$("sea"),"none"),$.$ca($.$("sky"),"none"),$.$ca($.$("adbar"),"none"),b='<div id="fuli" class="ifull">'+a[6].replace(/<span[^>]+><\/span>/mg,"").replace(/<br\/?>/img,"").replace(/(<img[^>]+)(\/s\d{1,4}(-h|-c)?\/)([^>]+)>/img,"$1/w"+screen.width+"/$4>").replace(/\ssrc=/mg,' src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRAA7" data-src=')+"</div>"):
0<f?b=this.ato(a[6]):(c=2,window.document.oncontextmenu=function(){return!1},$.$("sidebar")&&$.re("sidebar",""),$.$("sea")&&$.re("sea",""),1>$g.mo&&($.ad("abur"),$.$ca($.$("content"),"ifull")),b='<div id="gtext" data-print="true">'+(0<$g.mo?a[6]:$e.cat(a[6])).replace(/\u201d/mg,'"').replace(/\u2019/mg,"'")+"</div>");for(var f=[],d=0;d<a[3].length;d++)3>a[3][d].length&&a[3][d][0].match(/[a-z0-9]/)&&f.push(a[3][d]);f.sort();$.$("ipost").innerHTML=b+'<a id="ilael" style="display:none" href="/search/label/'+
f.join("/")+'">Home</a>';document.title=$.$i("ititle");1==c?$a.img("fuli"):2==c&&($.$("gtext").onselectstart=function(){return!1},setTimeout(function(){$e.off(0)},3E3));$.$("adbar")&&$p.nos("adbar");var g=setInterval(function(){"complete"===document.readyState&&$.$("ititle")&&(clearInterval(g),alo.$($g.no,"a.google","1",null,function(){$p.cek(e);$p.lab(a[3])}))},100)}},ato:function(a){var c=1;a=a.replace(/\r/mg,"<br/>").replace(/<[^>]+>/mg,function(a){var b=a.toLowerCase();return b.match(/^<(br|p|hr|\/div|\/tr|\/table)/g)?
"<br/>":b.match(/^<(a|b|u|i|span)\s/g)||b.match(/^<\/(a|b|u|i|span)>$/g)?a:0==b.indexOf("<img ")?(c++,a.replace(/\sdata-src=/ig,' class="y'+(0==c%2?"left":"right")+'" src=')):""}).replace(/<a\s(.*)<\/a>/mg,function(a){return a.match(/<img/g)?a.replace("<a ",'<a class="inx" '):a}).replace(/(^|\s)\w{25,}/img,function(a){return'<font class="brx">'+a+"</font>"});return'<div class="text">'+this.dbr(a)+"</div>"},dbr:function(a){var c=[];a=a.split("<br/>");var f,b;for(f=0;f<a.length;f++)0<=a[f].indexOf("<img ")?
c.push(a[f]):(b=$.te(a[f]).trim(),0<b.length&&(199<b.length&&(a[f]+="<br/>"),c.push(a[f])));return c.join("<br/>")},lab:function(a){var c=iylee.h+"feeds/posts/summary";if(0<a.length){for(var f=function(){0<b.length?(url=b[0],alo.$(url,"l."+md5(url).slice(-7),"1",3600,function(){setTimeout(function(){f()},2E3)}),b.shift()):(url=c+"/-/@?orderby=updated&alt=json-in-script&callback=sow.sow&start-index=1&max-results=50",alo.$(url,"l."+md5(url).slice(-7),"1",10800,null,1))},b=[],e=[],d=0,g=0,h=0;h<a.length;h++)3>
a[h].length?a[h][0].match(/[a-z0-9]/)&&e.push(a[h]):b.push(c+"/-/"+a[h].replace(/&gt;/mg,">")+"?orderby=updated&alt=json-in-script&callback=sow.sow&start-index=1&max-results=50"),"@"==a[h][0]&&(d=1),1==a[h].length&&0<+a[h]&&(g=1);0<g?0<d&&!$.$("tail")?($g.tail=c+"/-/~/"+e.join("/")+"?orderby=published&alt=json-in-script&callback=pow.inn&scroll=0&start-index=",url=$g.tail+"1&max-results=29",alo.$(url,"b."+md5(url).slice(-7),"1",$g.zb,function(){$p.fbs()},1)):($g.tail=c+"/-/~/"+e.join("/")+"?orderby=published&alt=json-in-script&scroll=0&start-index=",
url=$g.tail+"1&callback=pow.pae&max-results=1",alo.$(url,"b."+md5(url).slice(-7),"1",$g.zb)):(a=$.$t("ipost","img"),39<a[0].id.length&&($g.tail=$g.ga+"lists&vip=why&sky="+a[0].id+"&call=pow.gon&back=0&scroll=0&column=1&columns=1&index=",e=0<$g.mo?20:30,url=($g.tail+"1&results="+e).replace("&vip=why","&vip="+md5(a[0].id+e).slice(-7)),alo.$(url,"c."+md5(url).slice(-7),"1",$g.zc,function(){$p.fbs()},1)));f()}else url=c+"/-/@?orderby=updated&alt=json-in-script&callback=sow.sow&start-index=1&max-results=50",
alo.$(url,"l."+md5(url).slice(-7),"1",10800,null,1),1<$g.gcall.total&&(a=$.$e("div"),e=$g.gcall.total,d=+$.l().split("&ip=")[1],a.id="itail",$.$("ipost").appendChild(a),$.$("itail").innerHTML='<div class="gose"><input id="gchap" type="text" placeholder="'+d+'" value=""/> / <b id="sital">'+e+'</b><span data-gchap="gose">Go</span></div>',1==d?$.$("itail").innerHTML=$.$i("itail")+'<a id="bnext" data-zag="'+(d+1)+'">Next</a>':d==e?$.$("itail").innerHTML='<a id="bback" data-zag="'+(d-1)+'">Back</a>'+$.$i("itail"):
($.$("itail").innerHTML='<a id="bback" data-zag="'+(d-1)+'">Back</a>'+$.$i("itail"),$.$("itail").innerHTML=$.$i("itail")+'<a id="bnext" data-zag="'+(d+1)+'">Next</a>'))},cek:function(a){var c=$.$t("ipost","img"),f=0,b=$.$("ipost").offsetWidth;for(i=0;i<c.length;i++)c[i].offsetWidth>f&&(f=c[i].offsetWidth);$.$("sea")&&6<c.length&&255>a?120<b-f?($.$("sea").innerHTML="",$.$cr($.$("sky"),"none"),$.$cr($.$("adbar"),"none")):$.$("sea").innerHTML="":b-f>$g.wle+120?($.$cr($.$("sea"),"none"),$.$cr($.$("sky"),
"none"),$.$cr($.$("adbar"),"none")):b-f>$g.wle&&$.$cr($.$("sea"),"none");$a.soc("conbar")},cap:function(a){$.$("ipost")&&(30>=a?1<a&&(str='<div class="table"><div class="row"><div id="iend" class="cell"></div></div></div>',a=$.$e("div"),a.id="tail",a.innerHTML=str,$.$("ipost").appendChild(a)):(str=0>$.l().indexOf("m=1")&&1024<=screen.width?'<div class="table"><div class="row"><div id="istart" class="cell"></div><div id="iend" class="cell"></div></div><div class="row"><div id="ileft" class="cell"></div><div id="iright" class="cell"></div></div></div>':
'<div class="table"><div class="row"><div id="istart" class="cell"></div></div><div class="row"><div id="ileft" class="cell"></div></div><div class="row"><div id="iend" class="cell"></div></div><div class="row"><div id="iright" class="cell"></div></div></div>',$.$("tail")||(a=$.$e("div"),a.id="tail",a.innerHTML=str,$.$("ipost").appendChild(a))))},nu:function(a,c){for(var f=/.{1,7}\s[0-9]{1,4}/g,b=a+" "+c,e,d=0;null!=(e=f.exec(a));)if(e=e[0],d=e.split(" "),2<d.length&&(d=d.slice(-2)),e=new RegExp(d[0],
"gi"),e=(b.match(e)||[]).length,0<e)return+d[1];return d},adu:function(){var a=md5(location.pathname).slice(-7),c=this.ila(),f=$.r($a.noo($.$("ititle").innerHTML.toLowerCase())),b=$.r($.$("ititle").innerHTML),e=$.r(location.pathname.slice(1,location.pathname.length-5)),d=$.$t("ipost","img");if(d[0]){for(var d=$.r(d[0].src.slice(8,d[0].src.length-4)),g=$.$t("bodyl","a"),h=[],k=0;k<g.length;k++)h.push(g[k].innerHTML.replace(/&gt;/g,">"));g=$.r(","+h.join(",")+",");h=$.r($.te($.$("ipost").innerHTML).replace(/\n/mg,
" ").slice(0,397).trim());url=$g.ga+"upals&vip="+md5("add"+iylee.s+a+c).slice(-7)+"sky="+iylee.s+"&id="+a+"&ad="+c+"&search="+f+"&title="+b+"&link="+e+"&img="+d+"&label="+g+"&str="+h+"&type=0&point=0";alo.$(url,"r."+md5(url).slice(-7),"1",10800)}},fat:function(a){var c="<table>"+('<tr><td><p class="h"></p> <a class="k" data-like="'+a[0].slice(1)+'">'+(0<a[4]?a[4]:"")+" Like"+(1<a[4]?"s":"")+'</a></td><td><div id="stars"></div></td></tr>')+("<tr><td>"+a[1]+(1E4>a[1]?" view"+(1<a[1]?"s":""):"")+'</td><td><div id="starr"></div></td></tr>')+
('<tr><td colspan="2"><a class="t" href="/'+a[6]+'.html">'+a[5]+"</a></td></tr>")+"</table>";setTimeout(function(){$p.sar($a.nip(a[2]),a[0].slice(1),0)},100);$.$("ibars").innerHTML=c},sar:function(a,c,f){clearTimeout($g.stars);$g.stars=setTimeout(function(){clearTimeout($g.stars);for(var b=[],e,d=0==a[2]?-1:a[0]?a[0]:a.save?a.save:0,g='<a data-stars="'+c+'" data-save="'+d+'" data-blue="',h=0;10>h;h++)e=h+1,9<e&&(e=99),0==f?h<=d?b.push(g+h+'" class="a" style="opacity:0.'+e+'"/>'):b.push(g+h+'" class="b" style="opacity:0.'+
e+'"/>'):1==f&&(h<=a.blue?b.push(g+h+'" class="h" style="opacity:0.'+e+'"/>'):b.push(g+h+'" class="b" style="opacity:0.'+e+'"/>'));$.$("stars").innerHTML='<p data-ostar="rate" data-stars="'+c+'" data-save="'+d+'">'+b.join("")+"</p>";a[1]?(b=a[0]+1+"/10 ("+a[2]+" vote"+(1<a[2]?"s":"")+")",$.$("stars").lang=b):a.blue?(b=+a.blue+1,b=2>b?b+"/10 Kinh Kh\u1ee7ng":4>b?b+"/10 D\u1edf T\u1ec7":5>b?b+"/10 H\u01a1i D\u1edf":7>b?b+"/10 B\u00ecnh Th\u01b0\u1eddng":9>b?b+"/10 Kh\u00e1 Hay":10>b?b+"/10 R\u1ea5t Hay":
b+"/10 Tuy\u1ec7t V\u1eddi"):b=$.$("stars").lang?$.$("stars").lang:"Nh\u1edd B\u1ea1n \u0110\u00e1nh D\u1ea5u Sao";$.$("starr").innerHTML=b},50)},ila:function(){var a=$.$t("ipost","img"),c=0;a[0]&&39<a[0].id.length?c=a[0].id:0<$.l().indexOf("#id=")&&(c=$.l().split("#id=")[1],c=c.split("&ip=")[0],c=39<c.length?c:0);0==c&&$.$("ilael")&&(c=$.$("ilael").href);0!=c&&(c=md5(c).slice(-7));return c},fbs:function(){$.$("fbcom")&&0>$.l().indexOf("#id=")&&$o.ao("http://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=660580400758437",
function(){var a=setInterval(function(){if("fb-comments"!=$.$("fbcom").className){var c=$.$t("fbcom","span")[0];150<c.offsetHeight&&(clearInterval(a),c.style.height="141px",c.style.overflow="hidden")}},500)});$g.views=setTimeout(function(){if(0!=$g.views){var a=md5(location.pathname).slice(-7),c=$p.ila();url=$g.ga+"upals&vip="+md5($a.nav()+iylee.s+a+c).slice(-7)+"&sky="+iylee.s+"&id="+a+"&ad="+c+"&type=0&point=0";alo.$(url,"n."+md5(url).slice(-7),"1",6E5)}},0<$g.go?12E4:3E4)},nos:function(a){function c(a,
b,c){var d=$.$e("script");d.type="text/javascript";0<c?(b=/src=("|')([^\'\"]+)/g.exec(b),d.src=b[2]):d[void 0===d.innerText?"textContent":"innerText"]=$.te(b);$.$(a).appendChild(d)}var f=$.$(a),b=f.innerText,e=/<ins\b[^>]*>([\s\S]*?)<\/ins>/gm,d=e.exec(b),e=$.$e("div");f.id&&(e.id=f.id);e.innerHTML=d[0];f.parentNode.insertBefore(e,f);f.parentNode.removeChild(f);for(e=/<script\b[^>]*>([\s\S]*?)<\/script>/gm;d=e.exec(b);)f=d[1].replace(/\n|\s/mg,""),0<f.length?c(a,f,0):c(a,d[0],1)},lik:function(a){var c=
$.$t("iylink","a"),f="",b="";a="";var e=0;if($.s("iylik"))for(var f=$.s("iylik"),d=0;d<c.length;d++)if(b=md5(c[d].href).slice(0,3),0>f.indexOf(b)){a=c[d].href;e=1;break}0<e?c=f+"."+b:(a=0>$.l().indexOf(c[0].href)?c[0].href:c[1].href,c=md5(a).slice(0,3));$.ss("iylik",c,30);return a},prt:function(){var a=$g.mx-$.$b("gtext").left-9,c=$g.my-$.$b("gtext").top-Math.max($.$db().scrollTop,window.pageYOffset||$.$d().scrollTop)-15;a>$.$b("gtext").right&&(a=$.$b("gtext").right-25);$.$s("gtext").background="url(https://lh3.ggpht.com/-AwhNhudDlik/VzSVHtiztGI/AAAAAAAAJ2w/X1kmui8-MRAK_vXd4J4K7rUDXjpKmMDHQCLcB/s0/) "+
a+"px "+c+"px no-repeat";window.scrollTo(0,$g.my-59)},ban:function(a){a=a.split(".");$g.sban=a;url=$g.tail+a[0]+"&max-results=30";alo.$(url,"b."+md5(url).slice(-7),null,null,null,1)},san:function(a){a=a.split(".");var c=$.$t("ipost","img");$g.sban=a;url=($g.tail+a[0]+"&results=30").replace("&vip=why","&vip="+md5(c[0].id+a[0]+30).slice(-7));alo.$(url,"c."+md5(url).slice(-7),"1",$g.zc,null,1)}},pow={inn:function(a){function c(a,b,c,d){for(var e=[];1<=a;)a-=30,e.push("<li><span "+(c==b?'class="z"':"")+
' data-page="'+(1>a?1:a)+"."+(0>d?0:1)+"."+c+'">'+c+"</span></li>"),c++;return e}function f(a,b){for(var c=a,d=1,e=[];1<=c;)c-=30,e.push('<option value="'+(1>c?1:c)+".0."+d+'" '+(d==b?'selected="selected"':"")+">"+d+"</option>"),d++;return e}var b=[],e=[],d=[],g,h;h="";var k,n;2>$g.Idcheck.length&&a.feed.category&&$h.hat(a.feed.category);if("undefined"!=typeof a.feed.entry){var l=a.feed.entry;for(k=0;k<l.length;k++)if("undefined"!=typeof l[k].link)for(n=0;n<l[k].link.length;n++)if("alternate"==l[k].link[n].rel){var m=
l[k].title.$t;"undefined"!=typeof l[k-1]?h=l[k-1].title.$t:"undefined"!=typeof l[k+1]&&(h=l[k+1].title.$t);var p=l[k].link[n].href,q=l[k].id.$t.split("blog-")[1].split(".post-");g=$p.nu(m,h);d.push(g);b[g]=[m,p,q]}}d=0==$.$i("iend").length?d.sort(function(a,b){return b-a}):d.sort(function(a,b){return a-b});for(k=0;k<d.length;k++)g=b[d[k]][0].split(" "),n=b[d[k]][0].length,0<$g.mo&&32<n&&5<g.length?h=g.slice(0,3).join(" ")+".. "+g.slice(-2).join(" "):(h=b[d[k]][0],39<n&&(h=g.slice(0,5).join(" ")+".. "+
g.slice(-2).join(" "))),e.push('<li><a data-zag="'+b[d[k]][2][0]+"-"+b[d[k]][2][1]+'" href="javascript:">'+h+"</a></li>");a=+a.feed.openSearch$totalResults.$t+1;$p.cap(a);30<a?0>$g.sban?0==$.$i("iend").length?(0<$g.mo&&(e=e.slice(0,12)),$.$("iend").innerHTML='<ul class="list">'+e.join("")+"</ul>",$.$("iright").innerHTML='<input id="schap" type="text" value="" placeholder=""/><a data-schap="go">Enter</a><ul class="right page">'+c(a,Math.ceil(a/30),1,1).slice(-6).join("")+"</ul>",e=$.$t("iend","a"),
0<e.length&&($.$("schap").placeholder=$p.nu(e[0].innerHTML,$.$i("ititle"))),e=0<$g.mo?20:30,url=$g.tail+(1>a-e?1:a-e)+"&max-results="+e,alo.$(url,"b."+md5(url).slice(-7),"1",$g.zb,function(){0==$g.views&&$p.fbs()},1)):0==$.$i("istart").length?($.$("istart").innerHTML='<ul class="list">'+e.join("")+"</ul>",$.$("ileft").innerHTML='<ul class="page">'+c(a,1,1,-1).slice(0,10).join("")+'</ul><label><select id="isec" onchange="$p.ban(this.value)">'+f(a,1).join("\n")+"</select></label>"):$.$("iend").innerHTML=
'<ul class="list">'+e.join("")+"</ul>":("0"==$g.sban[1]&&($.$("istart").innerHTML='<ul class="list">'+e.join("")+"</ul>",b=+$g.sban[2],d=Math.floor(a/30),k=0<$g.mo?3:5,g=b-k,g+2*k>d&&(g=d-2*k),0>g&&(g=0),$.$("ileft").innerHTML='<ul class="page">'+c(a,b,1,-1).slice(g,g+2*k).join("")+'</ul><label><select id="isec" onchange="$p.ban(this.value)">'+f(a,+$g.sban[2]).join("\n")+"</select></label>"),"1"==$g.sban[1]&&($.$("iend").innerHTML='<ul class="list">'+e.reverse().join("")+"</ul>",b=+$g.sban[2],d=Math.ceil(a/
30),k=0<$g.mo?2:4,g=b-k,0>g&&(g=0),g+2*k>d&&(g=d-2*k),$.$("iright").innerHTML='<input id="schap" type="text" value="" placeholder=""/><a data-schap="go">Search</a><ul class="right page">'+c(a,b,1,1).slice(g,g+2*k).join("")+"</ul>",e=$.$t("iend","a"),1<e.length&&($.$("schap").placeholder=$p.nu(e[0].innerHTML,e[1].innerHTML)))):$.$("iend").innerHTML='<ul class="list">'+e.reverse().join("")+"</ul>"},gon:function(a){function c(a,b,c,d){for(var e=1,f=[];e<a;)f.push("<li><span "+(c==b?'class="z"':"")+' data-goge="'+
(1>e?1:e)+"."+(0>d?0:1)+"."+c+'">'+c+"</span></li>"),e+=30,c++;return f}function f(a,b){for(var c=1,d=1,e=[];c<a;)e.push('<option value="'+(1>c?1:c)+".0."+d+'" '+(d==b?'selected="selected"':"")+">"+d+"</option>"),c+=30,d++;return e}var b=[],e,d,g,h;for(e in a)0<e&&""!=a[e][0]&&(d=a[e].toString().replace(/\u201d/g,'"'),g=d.split(" "),h=d.length,0<$g.mo&&32<h&&5<g.length?d=g.slice(0,3).join(" ")+".. "+g.slice(-2).join(" "):39<h&&(d=g.slice(0,5).join(" ")+".. "+g.slice(-2).join(" ")),b.push('<li><a data-zag="'+
e+'" href="javascript:">'+d+"</a></li>"));a=+a[0].total;$p.cap(a);0<a&&(0>$g.sban?$.$("istart")&&0==$.$i("istart").length?($.$("istart").innerHTML='<ul class="list">'+b.join("")+"</ul>",$.$("ileft").innerHTML='<ul class="page">'+c(a,1,1,-1).slice(0,0<$g.mo?9:12).join("")+'</ul><label><select id="isec" onchange="$p.san(this.value)">'+f(a,1).join("\n")+"</select></label>",b=1>a-28?1:a-28,a=0<$g.mo?9:29,e=$.$t("ipost","img"),url=($g.tail+b+"&results="+a).replace("&vip=why","&vip="+md5(e[0].id+b+a).slice(-7)),
alo.$(url,"c."+md5(url).slice(-7),"1",$g.zc,function(){0==$g.views&&$p.fbs()},1)):0==$.$i("iend").length?($.$("iend").innerHTML='<ul class="list">'+b.reverse().join("")+"</ul>",$.$("iright")&&($.$("iright").innerHTML='<input id="gchap" type="text" value="" placeholder=""/><a data-gchap="go">Enter</a><ul class="right page">'+c(a,Math.ceil(a/30),1,1).slice(0<$g.mo?-5:-8).join("")+"</ul>"),b=$.$t("iend","a"),$.$("gchap")&&0<b.length&&($.$("gchap").placeholder=$p.nu(b[0].innerHTML,$.$i("ititle")))):$.$("iend").innerHTML=
'<ul class="list">'+b.reverse().join("")+"</ul>":("0"==$g.sban[1]&&($.$("istart").innerHTML='<ul class="list">'+b.join("")+"</ul>",e=+$g.sban[2],g=Math.floor(a/30),h=0<$g.mo?3:5,d=e-h,d+2*h>g&&(d=g-2*h),0>d&&(d=0),$.$("ileft").innerHTML='<ul class="page">'+c(a,e,1,-1).slice(d,d+2*h).join("")+'</ul><label><select id="isec" onchange="$p.san(this.value)">'+f(a,+$g.sban[2]).join("\n")+"</select></label>"),"1"==$g.sban[1]&&($.$("iend").innerHTML='<ul class="list">'+b.reverse().join("")+"</ul>",e=+$g.sban[2],
g=Math.ceil(a/30),h=0<$g.mo?2:4,d=e-h,0>d&&(d=0),d+2*h>g&&(d=g-2*h),$.$("iright").innerHTML='<input id="gchap" type="text" value="" placeholder=""/><a data-gchap="go">Search</a><ul class="right page">'+c(a,e,1,1).slice(d,d+2*h).join("")+"</ul>",b=$.$t("iend","a"),1<b.length&&($.$("gchap").placeholder=$p.nu(b[0].innerHTML,b[1].innerHTML)))))},jon:function(a){if(a.entry){var c=[];a=a.entry;var f=a.id.$t.split("blog-")[1].split(".post-"),b=a.published.$t,e=a.updated.$t;if("undefined"!=typeof a.category)for(var d=
0;d<a.category.length;d++)c.push(a.category[d].term);for(d=0;d<a.link.length;d++){var g=a.link[d];if("alternate"==g.rel){var h=g.href,k=g.title;$g.Idcheck.push(md5(h).slice(-5));break}}var g=$.b(a.content.$t),d=a.author[0].name.$t,n="undefined"!=typeof a.author[0].uri?a.author[0].uri.$t:"",l=a.author[0].gd$image.src.replace(/\/s220/,"/s27-c27").replace(/\/S220/,"/S220-c27");$p.jag([f,b,e,c,h,k,g,d,n,l,a.thr$total.$t])}else if(1>$g.off){$g.gcall=a[0];for(d in a)0<d&&(k=a[d][0],g=a[d][1]);$p.jag([1,
1,1,[],"",k,g,"","","",0])}},pae:function(a){var c=+a.feed.openSearch$totalResults.$t,f=$p.nu($.$i("ititle"),$.$i("ititle"));a=a.feed.entry;for(var b=0;b<a.length;b++)for(var e=0;e<a[b].link.length;e++)if(0==b&&"alternate"==a[b].link[e].rel){f=$p.nu($.$i("ititle"),a[b].title.$t);break}$.$("schap")&&0<+$.$("schap").value&&(f=+$.$("schap").value);c=c-(f-1)-25;f=$.$e("div");f.id="itail";$.$("ipost").appendChild(f);url=($.$("schap")&&0<+$.$("schap").value?$g.tail.replace("&callback=sow.inn",""):$g.tail)+
(1>c?1:c)+"&callback=pow.bin&max-results=50";alo.$(url,"b."+md5(url).slice(-7))},bin:function(a){var c=[],f=[],b,e=+a.feed.openSearch$totalResults.$t;2>$g.Idcheck.length&&a.feed.category&&$h.hat(a.feed.category);for(var d=a.feed.entry,g=0;g<d.length;g++)for(var h=0;h<d[g].link.length;h++)"alternate"==d[g].link[h].rel&&(0==g&&(b=$p.nu($.$i("ititle"),d[g].title.$t)),a=$p.nu(d[g].title.$t,$.$i("ititle")),f.push(a),c[a]=[d[g].title.$t,d[g].link[h].href,d[g].id.$t.split("blog-")[1].split(".post-")]);a=
f.sort(function(a,b){return a-b});$.$("schap")&&0<+$.$("schap").value?(a=a.indexOf(+$.$("schap").value),b=c[f[a]][2],$.ss(b[0],b[1],30),location.href=c[f[a]][1]+"#id="+b[0]+"&ip="+b[1]):1<f.length&&(a=a.indexOf(b),$.$("itail").innerHTML='<div class="gose"><input id="schap" type="text" placeholder="'+b+'" value=""/> / <b id="sital">'+e+'</b><span data-schap="gose">Go</span></div>',1==b?(f=f.slice(1,2),$.$("itail").innerHTML=$.$i("itail")+'<a id="bnext" data-zag="'+c[f[0]][2].join("-")+'">Next</a>'):
b==e?(f=f.slice(-2),$.$("itail").innerHTML='<a id="bback" data-zag="'+c[f[0]][2].join("-")+'">Back</a>'+$.$i("itail")):($.$("itail").innerHTML='<a id="bback" data-zag="'+c[f[a-1]][2].join("-")+'">Back</a>'+$.$i("itail"),$.$("itail").innerHTML=$.$i("itail")+'<a id="bnext" data-zag="'+c[f[a+1]][2].join("-")+'">Next</a>'))}};
