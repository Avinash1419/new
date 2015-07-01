window.onload=basic_animation;
function basic_animation(){
	collapseCards();
	$(".card_container").click(function(){
		var hide_variable= $(this).context.children[1];
		var hide_variable1= $(this).context.children[2];
		var parentElement=$(this).context.parentElement;
		$(parentElement).css({"border":"0px"});
		$(hide_variable).slideToggle();
		$(hide_variable1).slideToggle();
	});
	$("#internal_menu li").click(function(){
		collapseCards();
		$("#internal_menu li").css({'font-weight':'normal', 'color': 'rgba(255, 255, 255, 0.5)'})
		$(this).css({
			'font-weight':'bold', 'color':'white'
		});
	});
	$("#for_student").click(function(){show_menu();});
}
function collapseCards(){
		$(".card_description").css({"display":"none"});
		$(".card_comment_container").css({"display":"none"});
$('.card_outer_cotnainer').css({'border-bottom':'1px solid #808080'})
		$(".card_outer_container").css({'margin-top':'300px'});
		$("body").css({"overflow-y":"hidden"});
		for(var i=0; i<5;i++){
			var element = $(".card_outer_container")[i];			
			moveCards(element, 300*i);
		}
		setTimeout(function(){$("body").css({"overflow-y":"auto"});}, 2000);
}
function moveCards(element, delay){
	setTimeout(function(){
		$(element).animate({'margin-top':'10px'}, 500, function(){$(element).css({'border-bottom':'1px solid #808080'});});
		}, delay+200);
}
function show_menu(){
			$("#for_student_menu li").slideToggle('slow');
		//$("#for_student_menu").animate({'width':'50%'}, 'slow');
}
