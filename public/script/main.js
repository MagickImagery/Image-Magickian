$(document).ready(function() {

	// $('#jcrop-this').Jcrop({
	// 	trackDocument: true
	// });

	var jcropOptions = {
		trackDocument: true
	}

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
      	console.log(data.name);
      	var imageFile = data;

      	var $imgTag = $('<img>');
      	$imgTag.attr({
      		src: imageFile.name,
      		id: "jcrop-this"
      	}).appendTo("#uploaded-pic");
      	$imgTag.Jcrop(jcropOptions);
      	console.log($imgTag);
      });
	});
});
