$(document).ready(function() {

	$('#jcrop-this').Jcrop({
		trackDocument: true
	});
	$('#upload-form').on('submit', function(e){
			e.preventDefault();
			$.ajax({
				url: '/uploads',
				type: 'POST',
				data: {file: $('input[type="file]').files}

			}).done(function(error, res, data){
				console.log(res)
			})
	})
});
