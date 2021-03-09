$(document).ready(function(){
	const COUNT_UP = 1;
	const SEPARATOR = 0.5;
	const WIDTH_OF_GOAL = 200;
	const TIME_PER_MOVE_MS = 1500;

	const ballElem = $(`.js-ball`);
	const fieldElem = $(`.js-field`);
	const leftTeamScoreElem = $(`.js-left-team`);
	const rightTeamScoreElem = $(`.js-right-team`);

	const leftGoalPost = (fieldElem.height() * SEPARATOR) + (WIDTH_OF_GOAL * SEPARATOR)
							 	- (ballElem.height() * SEPARATOR);
	const rightGoalPost = (fieldElem.height() * SEPARATOR) - (WIDTH_OF_GOAL * SEPARATOR);
	const rightSidePosition = fieldElem.width() - ballElem.width();

	const getRandomNumber = function(range) {
		return Math.round(Math.random() * range);
	};

	const upScore = function(topValue ,score) {
		if (topValue > rightGoalPost && topValue < leftGoalPost) {
			alert('Гооооооол!!!');
			score.text(parseInt( score.text() ) + COUNT_UP );
		};
	};

	const sideBySide = function(topValue, sideValue, team, timeMs) {
		 ballElem.animate({
  			top: `${topValue}px`,
  			right: `${sideValue}px`	  			
  		}, timeMs, function() { upScore(topValue, team) });
	};		

	ballElem.on('click', function() {
		const randomY = getRandomNumber( fieldElem.height() ) - (ballElem.height() * SEPARATOR);
		
		if ( !$(this).hasClass(`ball__right-side`) ) {
	  		sideBySide(randomY, `0`, leftTeamScoreElem, TIME_PER_MOVE_MS);
	  	};
	  	if ($(this).hasClass(`ball__right-side`)) {
	  		sideBySide(randomY, rightSidePosition, rightTeamScoreElem, TIME_PER_MOVE_MS);	  		
	  	};

	  	$(this).toggleClass(`ball__right-side`);		
	});
});
