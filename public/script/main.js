$(document).ready(function() {

	var jcropOptions = {
		trackDocument: true,
		onSelect: function(c) {
			console.log(c);
		}
	}

	var imageName;

	$('#jcrop-this').Jcrop(jcropOptions);

	$('button.resize').on('click', function(e) {
		$.ajax({
			url: '/resize',
			type: 'POST',
			data: {
				size: e.target.dataset.size,
				image: imageName
			}
		}).done(function(data) {
			console.log(data);
		})
	})

	$(':button').click(function(){
    var formData = new FormData($('form')[0]);
    $.ajax({
      url: '/uploads',  //Server script to process data
      type: 'POST',
      // Form data
      data: formData,
      //Options to tell jQuery not to process data or worry about content-type.
      cache: false,
      contentType: false,
      processData: false
    }).done(function(data) {
      	var imageFile = data;
      	var $imgTag = $('<img>');
      	$imgTag.attr({
      		src: imageFile.name,
      		id: "jcrop-this"
      	}).appendTo("#uploaded-pic");
      	$imgTag.Jcrop(jcropOptions);
      	imageName = imageFile.name;
      });
	});
});
