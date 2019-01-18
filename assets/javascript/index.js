//check off specific items by clicking
$('ul').on("click", "li", function(event){
	event.stopPropagation();
	$(this).toggleClass("completed");

});

//click on x to delet an li
$("ul").on('click', 'span', function(){
	
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
});

//when press enter on text input, it's transform in new li

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newli = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" +newli+"</li>");
		$(this).val("");
		//event.stopPropagation();
	}
})

$("i").on("click", function(){
		$("input[type='text']").fadeToggle();

})
