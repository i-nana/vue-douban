var weibo = [];
var arr = [];
for(var i=0;i<weibo.length; i++){
	var wb = weibo[i].mblog;
	arr.push({
		created_at: wb.created_at,
		text: wb.text,
		source: wb.source,
		user: {
			screen_name: wb.user.screen_name,
			profile_image_url: wb.user.profile_image_url,
		},
		reposts_count: wb.reposts_count,
		comments_count: wb.comments_count,
		attitudes_count: wb.attitudes_count,
		pics: wb.pics
	});
}
var www = arr.sort(function(x, y){
	return new Date('2017-' + y.created_at).getTime() - new Date('2017-' + x.created_at).getTime();
})
JSON.stringify(www);