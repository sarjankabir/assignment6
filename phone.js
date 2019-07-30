$(document).ready(function() { // do this when the document is loaded
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();// hide the element with ID "otherElement"
	$("#tab_4").hide();


var countTab=1;


$("#tab1btn").click(function() { // when "button_id" is clicked
	tabOne();
});
$("#tab2btn").click(function() { // when "button_id" is clicked
	tabTwo();
});
$("#tab3btn").click(function() { // when "button_id" is clicked
	tabThree();
});
$("#tab4btn").click(function() { // when "button_id" is clicked
	tabFour();
});


function tabOne(){
	$("#tab_1").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_3").hide();	
	$("#tab_4").hide();// hide other element
	countTab=1;
}

function tabTwo(){

	$("#tab_2").show(); // show the element with ID "element"
	$("#tab_1").hide();
	$("#tab_3").hide();	
	$("#tab_4").hide();// hide other element
	countTab=2;

}
function tabThree(){

	$("#tab_3").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_1").hide();
	$("#tab_4").hide();	// hide other element
	countTab=3;

}
function tabFour(){

	$("#tab_4").show(); // show the element with ID "element"
	$("#tab_2").hide();
	$("#tab_1").hide();
	$("#tab_3").hide();	// hide other element
	countTab=4;

}


$('.digit').click (function() {
	var text = $(this).text();
	$("#dial-value").val($("#dial-value").val()+text);
});

$('.clearbtn').click (function() {
	var text = $("#dial-value").val();
	$("#dial-value").val(text.substring(0,text.length -1));
	
	
});
$('.deletebtn').click (function() {
	var text = $("#dial-value").val();
	$("#dial-value").val(" ");
	
	
});
$('.contactclear').click(
    function(){
        $("#username").val('');
		  $("#phone").val('');
		    $("#email").val('');
    });
		var downX=0;
		var downY=0;
		var upX=0;
		var upY=0;
$('.gesture').mousedown(
	function(e){
		$("#gesture_output").val("Mouse Down");
		 downX = e.pageX;
		 downY = e.pageY;
		 console.log(downX +" " + downY);
		
		 
	});
	
$('.gesture').mouseup(
	function(e){
		
		 upX = e.pageX;
		 upY = e.pageY;
		 console.log(upX +" " + upY);
		   if (upY<downY ){$("#gesture_output").val("Swipe Up");}
		 else if (upY>downY ){$("#gesture_output").val("Swipe Down");}
		 else if (upX<downX ){$("#gesture_output").val("Swipe Left");}
		 else if (upX>downX ){$("#gesture_output").val("Swipe Right");}
		 else if ((upX==downX)&&  (upY==downY)) {$("#gesture_output").val("Mouse Up");}
		 
		
		 
	});
	
$('.gesture').mouseleave(function() {
	$("#gesture_output").val(" ");
});


$(document).keydown(function(e) { 
console.log(countTab);
 if (e.keyCode == '39' && countTab < 4)
	{
		
		countTab++;
		console.log("Check");
		console.log(countTab);
		
		if(countTab ==2){
			tabTwo();
		}
		else if(countTab ==3){
			tabThree();
		}else if(countTab ==4){
			tabFour();
		}
	}
	else if (e.keyCode == '37' && countTab>1) {
		
		countTab--;
		console.log("Check");
		console.log(countTab);
		if(countTab==1){
			tabOne();
		}
		else if(countTab ==2){
			tabTwo();
		}
		else if(countTab ==3){
			tabThree();
		}else if(countTab ==4){
			tabFour();
		}
	}
});

/*var contrast_clr =1;
$("#contrast").click(function() {
	contrast_clr ++;
	if(contrast_clr %2==0) 
	{		
	$('.body').addClass('contrast');
	}
	else
	{
	$('.body').removeClass('contrast')}
});
*/

  $("#larger").click(function () {
                $('link').attr('href', 'phone-large.css');
				
            });
 $("#contrast").click(function () {
                $('link').attr('href', 'phone-contrast.css');
				
            });
			
			});