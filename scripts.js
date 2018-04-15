
$(function(){

	function randomizeQuote(arr) {

		var i = Math.floor(Math.random()*arr.length);

		return arr[i];

	};

	function generateQuote(obj){

		var targetQuote = $('.quote');
		var targetName = $('.author');


		targetQuote.html('');
		targetName.html('');

		var quoteHTML = '<p>"' + obj.quote + '"</p>'
		var nameHTML = '<p>-' + obj.name + '</p>'

		targetQuote.append(quoteHTML);
		targetName.append(nameHTML);
	};

// 	//Generate Quote on click
	$('#newQuote').on('click', () => {
		$.ajax({
			url: '/quotes',
			contentType: 'application/json',
			success: (res) => {
				var randomQuote = randomizeQuote(res.quotes);
				generateQuote(randomQuote);
			}
		});
	});
});







