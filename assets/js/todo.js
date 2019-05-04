//line-through and gray
$("ul").on("click","li",function(){
	$(this).toggleClass("complete");
});

//functionality of delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//adding a new li
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var text=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + text +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});