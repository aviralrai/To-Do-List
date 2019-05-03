//line-through and gray
$("li").click(function(){
	$(this).toggleClass("complete");
});
//functionality of delete
$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})