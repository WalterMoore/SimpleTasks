$(document).ready(function(){
//1. Make a button that displays an alert when clicked. Use DOM, jQuery, and Angular.
    $("#textAlert").click(function(){
        alert("Hey! Stop that.");
    });

//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box. Use DOM, jQuery, and Angular.
 	
	
	//$("#textbox").val("bla");
	 
	 $("#clickText").click(function(){
		 var bla = $("#textbox").val();
		 alert(bla);
	});
 
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
 //The div should return to it's original color when the mouse exits the div. Use DOM, jQuery, and Angular.
	$("#chameleon").hover(function() {
		console.log("I happened");
		$(this).addClass("hover");
	}, 
		function() { 
			$(this).removeClass("hover");
	});
 
 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
 //Once complete, try making it switch to a random color each click. Use DOM, jQuery, and Angular.
 	$("#redRandom").click(function(){
		 $(this).css("color",
			Math.floor(Math.random()* 256).toString(16) + 
        	Math.floor(Math.random()* 256).toString(16) + 
        	Math.floor(Math.random()* 256).toString(16));
	});

 
//5. Add a span that says your name in it to an empty div. Use DOM, jQuery, and Angular.
	$("#clickName").click(function(){
		console.log("hello from inside clickName");
		//var myName = $("#namebox").val;
		$( "#nameHere" ).append( $("#namebox").val());
		console.log("hello from after append");
	});

//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create. Use DOM, jQuery, and Angular.
		var beatles = ['John', 'Paul', 'George', 'Ringo', 'Pete'];
		var bList = $('ul.myList')
	$.each(beatles, function(i) {
		var li = $('<li/>')
			//.addClass('ui-menu-item')
			//.attr('role', 'menuitem')
			.appendTo(bList);
		var a = $('<a/>')
			//.addClass('ui-all')
			.text( this )
			.appendTo(li);
	});
});