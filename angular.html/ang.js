//1. Make a button that displays an alert when clicked. Use DOM, jQuery, and Angular.
var myApp = angular.module('myApp', []);

	myApp.controller('ThingController', ['$scope', '$window', function ($scope, $window){
		
		$scope.myStyleRandom = 'rgb(0,0,0)';
		
		$scope.clickMe = function(){
			alert("Hi");
		}
		$scope.secondClickMe = function(greeting2){
			alert(greeting2);
		}
		
		$scope.ngRandom = function () {
				var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
					(Math.floor(Math.random() * 256)) + ',' +
					(Math.floor(Math.random() * 256)) + ')';
				$scope.myStyleRandom = hue;
		}	
		$scope.clickName = function(yourName){
			$scope.displayName = yourName;
		}	
		$scope.persons = [
				'Taylor',
				'Zorro',
				'Clark Kent',
				'Conan of Cimmeria',
				'John Wayne',
				'Bart Simpson'
		];
		
	}]);

//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box. Use DOM, jQuery, and Angular.

 
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
 //The div should return to it's original color when the mouse exits the div. Use DOM, jQuery, and Angular.

 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
 //Once complete, try making it switch to a random color each click. Use DOM, jQuery, and Angular.
 
 
 
//5. Add a span that says your name in it to an empty div. Use DOM, jQuery, and Angular.




//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create. Use DOM, jQuery, and Angular.