$(document).ready(function(){

//-------------------------------------------------file style
	$(".file-style").filestyle({
		buttonText: 'Выберите файл'
	});


$('.file-style').change(function() {
   if ($(this).val().length){
   		$(".filestyle-wrap").addClass("fulled");
   		$(".buttonText").html("Заменить");
   	  } else{
   	  	$(".filestyle-wrap").removeClass("fulled");
   	  	$(".buttonText").html("Выберите файл");
   	  }
});
//------------------------------------------------input-others
	$("#input-others").focus(function(){
		$(".section-help-fund .input__field--radio").prop("checked",false);
	});

//-----------------------------------------------question-item-health && question-item--activity
$(".question-item-health #input-20,.question-item-health #input-21").change(function(){
	 if( $("#input-20").is(':checked') ){
	 	$(".question-item-health .hidden-section").slideDown();
	 }else{
	 	$(".question-item-health .hidden-section").slideUp();
	 }
});

$(".question-item--activity #input-27,.question-item--activity #input-28").change(function(){
	 if( $("#input-27").is(':checked') ){
	 	$(".question-item--activity .hidden-section").slideDown();
	 }else{
	 	$(".question-item--activity .hidden-section").slideUp();
	 }
});

//-------------------------------------------------------question-item-master

$(".question-item-master input").change(function(){

	if( $(".question-item-master input:checked").length == 2 ){
			$(".question-item-master input:not(:checked)").prop("disabled", true );
	}else{
		$(".question-item-master input:not(:checked)").prop("disabled", false );
	}
});

//-----------------------------------------------form-validation
	var formValidate =	$("#form-validation").validate({
			rules: {
				organization: "required",
				siteFund: "required"
			},
			messages: {
				organization: "Заполните поле",
				siteFund: "Заполните поле"
			}
		});

	$("#showErrors").click(function(){	
	formValidate.showErrors({
		"organization": "Код регистрации не найден"
		});
	});	

});