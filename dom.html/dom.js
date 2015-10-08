//1. Make a button that displays an alert when clicked. Use DOM, jQuery, and Angular.
	function myFunction(){
		alert("OW! Watch it!");
	};
			
	var btn = document.getElementById('textAlert');
	btn.onclick=myFunction;
			/*function createButton() {
				var myButton = document.createElement('button');
				var myButtonText = document.createTextNode('Click Me');	
						
				myButton.appendChild(myButtonText);
				
				myButton.style.backgroundColor = '#BF5700';
				myButton.style.height = '40px';
				myButton.style.width = '100px';
				myButton.style.fontSize = '20px';
				//myBottonText.style.color = 'white';
				//Hooray Jeff!
				myButton.style.marginLeft = '43%';
				myButton.style.marginRight = '45%';
				//
				document.body.appendChild(myButton);
				myButton.addEventListener("click",createSquare);
			}*/

//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box. Use DOM, jQuery, and Angular.
 
 
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
 //The div should return to it's original color when the mouse exits the div. Use DOM, jQuery, and Angular.
 
 	function myChameleon(e){
		e.target.style.backgroundColor="red";
	};
			
	var box = document.getElementById('chameleon');
	box.onmouseover=myChameleon;
 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
 //Once complete, try making it switch to a random color each click. Use DOM, jQuery, and Angular.
 
 
 
//5. Add a span that says your name in it to an empty div. Use DOM, jQuery, and Angular.




//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create. Use DOM, jQuery, and Angular.