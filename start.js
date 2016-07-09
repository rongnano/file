var alo = {ms:0,md:0,me:0,
e:function(x,y,z = null){
  var s = document.createElement(y);
  if(y=='script'){s.async = true;
	setTimeout(function(){
			document.getElementsByTagName('script')[0].remove();
		},500);
	}
	var k = document.createTextNode(x);
		s.appendChild(k);
		document.getElementsByTagName('head')[0].appendChild(s);
		
  	if(z)$.lg(0);
},
c:function(url, name, ver, loai, call = null, load = null){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	  if(xmlhttp.readyState == 4){
	    if(xmlhttp.status == 200){
			var nd = xmlhttp.responseText;//console.log(xmlhttp.getAllResponseHeaders());
			alo.e(nd,loai,load);if(call)call();
            if(nd[0]=='$'){
              nd = nd.split(';');nd.shift();
              nd = nd.join('');
            }
			localStorage.setItem(name, JSON.stringify({content: nd, version: ver}));
        }
	  }
	}
	xmlhttp.open('GET', url, true);
	xmlhttp.send();
},
p:function(x,y){
	this.ms = x;this.md = y;this.me = new Date().getTime();
	localStorage.setItem('a.start',this.me);
	localStorage.setItem('a.google',JSON.stringify({content: 'var googles = {ms:'+x+',md:'+y+'};',version: '1'}));
},
$:function(url, name, ver, ex = null, call = null, load = null){
	if(url.indexOf('/exec?')>0&&url.indexOf('&ddos=')<0){
		if(this.ms!=0){
			var en = Math.floor((new Date().getTime()-this.me)/1000);
			this.$(url+'&ddos='+(this.ms+en)+'&dos='+this.md+'&end='+en, name, ver, ex = null, call = null, load = null);
		}else{
			var wai = setInterval(function(){
				if(typeof(googles)=='object'){
					clearInterval(wai);
					var start = localStorage.getItem('a.start');
					if(start!=null){
						alo.me = new Date().getTime();
						alo.ms = googles.ms + Math.floor((alo.me-(+start))/1000);
						alo.md = (alo.ms-173472337)*7;
						alo.$(url+'&ddos='+alo.ms+'&dos='+alo.md+'&end=0', name, ver, ex = null, call = null, load = null);
					}
				}
			},100);
		}
	}else{
		var d = Math.ceil(new Date().getTime()/1000),s = localStorage;
	    if(load){
	      sow.src = url;
	      $.lg(1);
	    }
		if(ex&&ex!=0){
			var k = 0;
			for(var i in s){
				if(i.indexOf(name)==0){
					if(i.indexOf(name+'-')==0)k = i;
					else s.removeItem(i);break
				}
			}
			if(k!=0){
				var f = k.split('-');f = (+f[1]);
				if(f<d){
					s.removeItem(k);
					name += '-' + (d+(+ex));
				}else name = k;
			}else name += '-' + (d+(+ex));
		}
		var save = s.getItem(name);
		var loai = url.indexOf('.css')>0?'style':'script';
		if(save!=null&&ver!=null){
			var gsave = JSON.parse(save);
			if(gsave.version == ver){
				this.e(gsave.content,loai,load);
				if(call)call();			
			}else{
				localStorage.removeItem(save);
				this.c(url, name, ver, loai, call, load);
			}		
		}else this.c(url, name, ver, loai, call, load);
	}
}
};

alo.$('https://script.google.com/macros/s/AKfycbxBh5ptSSej3stcLyB1k_oIuVXuKvGLzsdc7LFL2I4xe4APdaA/exec','a.google','1',null,function(){alo.p(googles.ms,googles.md)});
alo.$('https://rongnano.github.io/file/js.js','a.js','1');
alo.$('https://rongnano.github.io/file/style.css','a.css','1');

