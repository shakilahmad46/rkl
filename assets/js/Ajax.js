function Ajax(){
}
Ajax.prototype.post = function(url,data,onSuccess){
	$.ajax({
		url : url
		,cache: false
		,method: 'post'
		,data: data
		,success: function(data){
			if(typeof onSuccess == 'function'){
				onSuccess(data);
			}
		}
		,error: function(){
		}
	});
}
var Ajax = new Ajax;