var sone = 0;
/* Chia sẻ bởi Hoàng Thắng */
var $c = {
log:function(){
	return 'Admin: <input id="user" type="text" value=""/> <input id="pass" type="password" value=""/> <button onclick="$c.pas()">OK</button>';
},
pas:function(){
	$.ss('sky',md5($.$('user').value+$.$('pass').value),30);$a.meo(0,0);
},
bag:function(x){
	var d = new Date((+x[11])*1000),c = 0;if(x[9].indexOf('(*...*)')>0){c = x[9].split('(*...*)');c = c.length-1}	
	var str = '<p>'+x[10].replace(/”/mg,'"').replace(/\(\*\.\.\.\*\)/mg,'<br/>')+'</p><p class="o">'+x[9].replace(/”/mg,'"').replace(/\(\*\.\.\.\*\)/mg,'<br/>')+'</p>'+			
			'<a class="s">Số: '+x[0]+' ('+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+')</a>'+
			'<a class="n" href="'+x[7]+'" target="_blank">'+x[8]+'</a>'+
			'<a id="'+x[2]+'" class="'+(x[1]>0?'r"':'u" data-eten="'+x[10]+'" data-edit="'+x[2]+'.'+x[3]+'.'+x[4]+'.'+x[5]+'.'+c+'.'+x[6]+'"')+'>'+(x[1]>0?'Đã':'Chưa')+' Cập Nhật</a>';
	return str;
},
rup:function(x){$.$(x).className = 'r'},
sow:function(json){
	$.$s('content').backgroundImage = 'none';$.$s('sky').display = 'none';
	$.$('ititle').innerHTML = 'Cập Nhật Sửa Lại Lỗi Chính Tả';
	$.$('ipost').innerHTML = '<div id="spell"></div>';
	for(var i in json){
		if(i!=0){
			var x = json[i];
			if(x[0]!=''){
				$g.cdit.push(x);
			}			
		}
	}
	clearInterval($g.spel);
	$g.spel = setInterval(function(){
		if($g.cdit.length>0){
			var div = $.$e('div'),sav = $g.cdit[0];$g.cdit.shift();
			var bag = $c.bag(sav);
				if(bag){
					div.className = 'wap';div.innerHTML = bag;				
					$.$('spell').appendChild(div);
				}
		}else clearInterval($g.spel);	
	},77);
}
};


















