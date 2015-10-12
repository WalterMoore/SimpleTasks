//1. Make a button that displays an alert when clicked. Use DOM, jQuery, and Angular.
var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products = [
  	{ 
    	name: 'The Book of Trees', 
    	price: 19, 
    	pubdate: new Date('2014', '03', '08'), 
    	cover: 'img/the-book-of-trees.jpg',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Program or be Programmed', 
    	price: 8, 
    	pubdate: new Date('2013', '08', '01'), 
    	cover: 'img/program-or-be-programmed.jpg',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/b/b4/Harry_Potter_and_the_Prisoner_of_Azkaban_(US_cover).jpg',
    	likes: 0,
      dislikes:0
  	}, 
  	{ 
    	name: 'Ready Player One', 
    	price: 7.99, 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
//2. Make a button and text box. When the button is clicked,
// display an alert with the message that is typed in the text box. Use DOM, jQuery, and Angular.
 
 
//3. Create a div in HTML then add JavaScript to make it change colors whenever your mouse hovers over the div.
 //The div should return to it's original color when the mouse exits the div. Use DOM, jQuery, and Angular.
 
 
 
//4. Put some text in a paragraph. Make it where when you click on the paragraph text, the color of the text switches to red.
 //Once complete, try making it switch to a random color each click. Use DOM, jQuery, and Angular.
 
 
 
//5. Add a span that says your name in it to an empty div. Use DOM, jQuery, and Angular.




//6.Create a <ul> in HTML. From JavaScript add an <li> for items in an array that you create. Use DOM, jQuery, and Angular.