$(document).ready(function(){
	var $grid = $('.grid').masonry({
 		itemSelector: '.grid-item',
 		percentPosition: true,
  		columnWidth: '.grid-sizer',
  		isFitWidth: true,
	});

	$grid.imagesLoaded(function(){
		$grid.masonry();
	});
	console.log("Masonry Ready!");
});