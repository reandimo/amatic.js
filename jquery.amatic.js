
// * Amatic JS
// * Version - 1.0
// * Licensed under the MIT license - http://opensource.org/licenses/MIT
// * Renan Diaz
// * Copyright (c) 2017 - 2018


(function ( $ ) {
	
	$.amatic = function( options ) {

	//	DETECT IF PLUGIN IS SET	 

			// Default options.
	        var options = $.extend({

				newClass: "",
				loader: "fa fa-circle-o-notch",
				completeIcon: "fa fa-check",
				fadeIn: true,
				fadeOut: true,
				animateIn: "",
				animateOut: "",
				timeOut: 2000,
				css: null,
				beforeLoader: function(){},
				afterLoader: function(){}
							
	        }, options );
					
	//	REMOVE HTML TIME OUT
			
			var removeTime = options.timeOut + 500;
			
	//	AJAX START
			
			$(document).ajaxStart( function(event){

				event.stopImmediatePropagation();
				
				//beforeLoader Function
	            options.beforeLoader.call(this);
					
				if($('#amatic-element').length <= 0){
					
					$("body").append( "<div id='amatic-element' class='amatic-element' style='display: none;'><i class='"+options.loader+" rotating'></i></div>" );
				
				}
					
					
				if(options.css !== ""){
				
					$("#amatic-element").css(options.css); //Add css if is set
				
				}
					
				$("#amatic-element").addClass(options.newClass); //Add class if is set			
				
				$("#amatic-element").addClass("animated "+options.animateIn); //Add animation if is set			

				switch(options.fadeIn){ //detect fadeIn config	
						
					case true :
					
						if(options.animateIn !== ""){
						
						   $("#amatic-element").show(); 
						
						}else{
						
						   $("#amatic-element").fadeIn();
						
						}			
						
					break;
					
						
					case false :
					
					   	$("#amatic-element").show(); 

					break;
				
				}			
				
			});

			
	//	AJAX SUCCESS	
			
			$(document).ajaxSuccess(function(){

				setTimeout(function(){
					
					$("#amatic-element").html("<i class='"+options.completeIcon+"'></i>"); 
				
				}, 1000);
				
			});

	//	AJAX SUCCESS	
			
			$(document).ajaxError(function(){

				setTimeout(function(){
					
					$("#amatic-element").html("<i class='"+options.completeIcon+"'></i>"); 
				
				}, 1000);

				console.log("Something's wrong man!. There was an error!")
				
			});


	//	AJAX COMPLETE	
			
			$(document).ajaxComplete( function(){

				//afterLoader Function
	            options.afterLoader.call(this);

				$("#amatic-element").removeClass("animated "+options.animateIn); //remove initial animation if is set			
					
				$("#amatic-element").addClass("animated "+options.animateOut); //Add animation if is set				
					
					switch (options.fadeOut){//detect fadeOut config	
						
					case true :
					
						if(options.animateOut !== ""){
						
						   $("#amatic-element").hide(); 
						
						}else{
						
						   $("#amatic-element").fadeOut();
						
						}	
							
					break;
					
					case false :
					
					   	$("#amatic-element").hide(); 

					break;
					
					}
				
				
				setTimeout(function(){	
					$("#amatic-element").remove();	
				}, removeTime);
				
			}); 

	};
	
}( jQuery ));