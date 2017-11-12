 $(document).ready( function() {

            $('.demo').each( function() {
                //
                // Dear reader, it's actually very easy to initialize MiniColors. For example:
                //
                //  $(selector).minicolors();
                //
                // The way I've done it below is just for the demo, so don't get confused
                // by it. Also, data- attributes aren't supported at this time. Again,
                // they're only used for the purposes of this demo.
                //
                $(this).minicolors({
                    control: $(this).attr('data-control') || 'hue',
                    defaultValue: $(this).attr('data-defaultValue') || '',
                    format: $(this).attr('data-format') || 'hex',
                    keywords: $(this).attr('data-keywords') || '',
                    inline: $(this).attr('data-inline') === 'true',
                    letterCase: $(this).attr('data-letterCase') || 'lowercase',
                    opacity: $(this).attr('data-opacity'),
                    position: $(this).attr('data-position') || 'bottom left',
                    swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                    change: function(hex, opacity) {
                        var log;
                        try {
                            log = hex ? hex : 'transparent';
                            if( opacity ) log += ', ' + opacity;
                            console.log(log);
                        } catch(e) {}
                    },
                    theme: 'default'
                });

            });

        });


$(document).ready(function() {
		 
		 // Positions
		 
		 
		 $("#currency").blur(function(){
			var currencyText =  $(this).val();
			console.log(currencyText);
			$("#lblText").text(currencyText);
		 });
		 $("#currency").keyup(function(e){
			if (e.which == 13){
			var currencyText =  $(this).val();
			console.log(currencyText);
			$("#lblText").text(currencyText);
			}
		 });
		///////////////////////
		 
		 $('#alignment input').on('change', function() {
		   var FloatValue = ($('input[name=align]:checked', '#alignment').val());
		   $(".switchContainer").css("float", FloatValue ); 
		});

		////////////////////////////////
		
		 $("#hMargin").blur(function(){
			var hMarginValue =  parseInt($(this).val());
			$(".switchContainer").css("margin-left", hMarginValue );
			$(".switchContainer").css("margin-right", hMarginValue )
		 });
		 $("#hMargin").keyup(function(e){
			if (e.which == 13){
				var hMarginValue =  parseInt($(this).val());
				$(".switchContainer").css("margin-left", hMarginValue );
				$(".switchContainer").css("margin-right", hMarginValue )
			}
		 });
		 
		 ////////////////////////////////
		 
		 $("#vMargin").blur(function(){
			var vMarginValue =  parseInt($(this).val());
			$(".switchContainer").css("margin-top", vMarginValue )
			$(".switchContainer").css("margin-bottom", vMarginValue )
		 });
		 $("#vMargin").keyup(function(e){
			if (e.which == 13){
				var vMarginValue =  parseInt($(this).val());
				$(".switchContainer").css("margin-top", vMarginValue )
				$(".switchContainer").css("margin-bottom", vMarginValue )
			}
		 });
		 
		 ////////////////////////////////
		 
		 $("#dropHeight").blur(function(){
			var HeightValue =  parseInt($(this).val());
			$(".nice-select").css("height", HeightValue )
			$(".nice-select").css("line-height", HeightValue + "px")
		 });
		 $("#dropHeight").keyup(function(e){
			if (e.which == 13){
				var HeightValue =  parseInt($(this).val());
				$(".nice-select").css("height", HeightValue )
				$(".nice-select").css("line-height", HeightValue + "px")
			}
		 });
		 
		 ////////////////////////////////
		 
		 $("#dropWidth").blur(function(){
			var WidthValue =  parseInt($(this).val());
			$(".nice-select").css("width", WidthValue );
			$(".nice-select .list").css("width", WidthValue )
		 });
		 $("#dropWidth").keyup(function(e){
			if (e.which == 13){
				var WidthValue =  parseInt($(this).val());
				$(".nice-select").css("width", WidthValue );
				$(".nice-select .list").css("width", WidthValue )
			}
		 });
		 
		 
		 ////////////////////////////////
		  
		  
		 $("#dropFont").blur(function(){
			var FontValue =  parseInt($(this).val());
			$(".nice-select.switch").css("font-size", FontValue );
		 });
		 $("#dropFont").keyup(function(e){
			if (e.which == 13){
				var FontValue =  parseInt($(this).val());
				$(".nice-select.switch").css("font-size", FontValue );
			}
		 });
		 
		 
		 
		 // Styles
		 
		 $('#borderContainer input').on('change', function() {
		   var borderValue = ($('input[name=border]:checked', '#borderContainer').val());
		   $(".nice-select.switch").css("border", borderValue );
		   $(".nice-select ul.list").css("border", borderValue );
		   $(".nice-select ul.list li").css("border", borderValue ); 
		});
		
		
		$('#flagContainer input').on('change', function() {
		   var flagValue = ($('input[name=flag]:checked', '#flagContainer').val());
		   console.log(flagValue);
		   $(".flags").css("display", flagValue ); 
		});
		
		$('#transContainer input').on('change', function() {
		   var transValue = ($('input[name=transparentCol]:checked', '#transContainer').val());
		   $(".nice-select").css("background-color", transValue );
		   $(".nice-select").css("border", "0px solid #e8e8e8" ); 
			if ($('#trans2').is(':checked')) {
				$(".nice-select").css("border", "1px solid #e8e8e8" ); 
			}
		});
		
		$('#displayContainer input').on('change', function() {
		   var displayValue = ($('input[name=displayBox]:checked', '#displayContainer').val());
		   $(".switchContainer").css("display", displayValue ); 
		});
		 
		 
		 // Colors
		 
		 
		 $("#txtColor").blur(function(){
			var txtColorVale =  $(this).val();
			$(".nice-select").css("color", txtColorVale );
			$(".nice-select ul li").css("color", txtColorVale );
			 $( "<style type='text/css'>.nice-select:after { border-color: " + txtColorVale + "; }</style>" ).appendTo( "head" )
		 });
		 
		 
		 $("#bgColor").blur(function(e){
			var bgColorVale =  $(this).val();
			$(".nice-select").css("background-color", bgColorVale );
			$(".nice-select .option").css("background-color", bgColorVale );
			
		 });
		 
		$("#brdrColor").blur(function(e){
			var brdrColorVale =  $(this).val();
			$(".nice-select").css("border-color", brdrColorVale );
			$(".nice-select .option").css("border-color", brdrColorVale );
			$(".nice-select .list").css("border-color", brdrColorVale );
		 });
		 
		 
		 
});