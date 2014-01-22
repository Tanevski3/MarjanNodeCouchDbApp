$(function(){
	$('input#messsage').click(function(ev){
		if($('input#messsage').val()=='Enter your message here'){
		$('input#messsage').val('');
		}
	});
});