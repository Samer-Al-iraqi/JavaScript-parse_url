function parse_url(url){
	if(typeof url != 'string') return false;
	var parts=url.match(/^(https?)\:\/\/(\w[\w\.\-_]+\w)(\:(\d{1,10}))?(\/[^\?\#\s\'\"\<\>\;]*)?(\?([^\?\#\s\'\"\<\>\;]*))?(\#([^\?\#\s\'\"\<\>\;]*))?$/);
	if(!parts) return false;
 	parts={
		protocol:parts[1],
		host:parts[2],
		path:parts[5],
		query: parts[7],
		hash: parts[9]? parts[9] : ''
	};
	var query={};
	if(parts.query){
		if(!parts.query.match(/^$/))
		var vars=parts.query.split('&'), n_v;
		for(var i=0;i<vars.length;i++){
			if(!vars[i]) continue;
			n_v=vars[i].split('=');
			if(n_v.length>2) return false;
			query[n_v[0]]=decodeURIComponent(n_v[1]);
		}
	}
	parts.query=query;
	return parts
}

