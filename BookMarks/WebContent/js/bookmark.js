angular.module('bookmarks',[])
.controller('MainCtrl', function($scope) {
	$scope.categories = ["Javascript","CSS","HTML","Angular","Others"];
	$scope.bookmarkItems = [
	{title:"Angular JS",id:"1",url:"https://angularjs.org",category:"Javascript"},
	{title:"JQuery",id:"2",url:"http://www.jQuery.com",category:"Javascript"},
	{title:"Bootstrap",id:"3",url:"http://www.bootstrap.com",category:"css"},
	{title:"Gulp",id:"4",url:"http://www.gulp.com",category:"css"},
	{title:"Grunt",id:"5",url:"http://www.grunt.com",category:"HTML"},
	{title:"XSS",id:"6",url:"http://www.xss.com",category:"HTML"},
	{title:"PHP",id:"7",url:"http://www.php.net",category:"Angular"},
	{title:"JAVA",id:"8",url:"http://www.oracle.com",category:"Angular"},
	{title:"MySQL",id:"9",url:"http://www.mysql.com",category:"Others"}
	];
	
	$scope.currentCategory = '';
	$scope.isEditing = false;
	$scope.isCreating = true;
	$scope.editedBokmark = null;
	
	function setCurrentCategory(category){
			
			$scope.bookmark = {
				title:"",
				url :"",
				id:"",
				category:""
					
			};
			$scope.currentCategory = category;
			$scope.isEditing = false;
			$scope.isCreating = true;
	}
	
	function addBookMarks(bookmark){
		console.log(bookmark);
		bookmark.title = bookmark.title;
		bookmark.url = bookmark.url;
		bookmark.id = $scope.bookmarkItems.length+1;
		bookmark.category = $scope.currentCategory;
		
		$scope.bookmarkItems.push(bookmark);
				
	}
	
	function editBookMark(bookmarkItem){
		$scope.isEditing = true;
		$scope.isCreating = false;
		
		$scope.editedBokmark = 	angular.copy(bookmarkItem);
		
		//console.log(bookmarkItem);
		
	}
	
	
	function updateBookMark(bookmarkItem){
		
		console.log(bookmarkItem);
		
		
	}
	
	$scope.setCurrentCategory = setCurrentCategory;
	$scope.addBookMarks = addBookMarks;
	$scope.editBookMark = editBookMark;
	$scope.updateBookMark = updateBookMark;
})