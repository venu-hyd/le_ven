$(document).ready(function(){
		
		
		
		
		
		applyBigStyles();
		
		
	
		
		
		
	});
	
	function applyBigStyles()
	{
		/*$(':radio').each(function(){
		   $(this).attr("class","radio bigradio");
		});
		
		$(':checkbox').each(function(){
		   $(this).attr("class","bigcheck");
		});*/
		
		
		// Readio box
		$('.bigcheck, .bigradio').each(function(){
			$(this).parent().append('<span class="bigcheck-target"></span>');
		});
	}