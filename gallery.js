$(function() {
	// JSON, $.getJSON()
	var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	$.getJSON(flickrApiUrl, {
		tags: "food",
		tagmode: "any", 
		format: "json"
	  }).done(function(data) {
	  	console.log(data);
	  	$.each(data.items, function(index, item) {
	  		console.log(item);
	  		$("<img>").attr("src", item.media.m).appendTo("#flickr");
	  	});
	  }).fail(function() {
	  	alert("Ajax	call failed.");
	  });
});