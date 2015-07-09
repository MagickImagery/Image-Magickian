$(document).ready(function() {

	var croptions;

	var jcropOptions = {
		trackDocument: true,
		onSelect: function(c) {
			// logs the dimensions when the select box is changed
			croptions = c;
			console.log(c);
		}
	}

	// simple way to keep track of current file name
	var imageName;

	// $('#jcrop-this').Jcrop(jcropOptions);
  $('button.crop').on('click', function(e) {
    e.preventDefault();
    console.log("Croppah Contents: ", croptions)
    $.ajax({
      url: '/crop',
      type: 'POST',
      data:{
        croptions: croptions,
        image: imageName
      }
    }).done(function(data){
      imageName = data.image;
      $("#uploaded-pic").empty();
      var $imgTag = $('<img>');
      $imgTag.attr({
        src: data.image,
        id: "jcrop-this"
      }).appendTo("#uploaded-pic");
      $imgTag.jcropOptions;
    });
  });

 	// resize buttons
	$('button.resize').on('click', function(e) {
		e.preventDefault();
		// sends the pic file name to the server and the server resizes
		$.ajax({
			url: '/resize',
			type: 'POST',
			data: {
				size: e.target.dataset.size,
				image: imageName
			}
		}).done(function(data) {
			// clears out the div containing the old uploaded pic
			imageName = data.image;
			$("#uploaded-pic").empty();
			// then makes a new img tag to refresh the div/element/whatever
			var $imgTag = $('<img>');
    	$imgTag.attr({
    		src: data.image,
    		id: "jcrop-this"
    	}).appendTo("#uploaded-pic");
    	$imgTag.Jcrop(jcropOptions);
		});
	});



	// uploading a new pic
	$('input[type="button"]').click(function(){
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
})