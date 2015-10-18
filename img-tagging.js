"use strict";

// Displays meaning, popularity, and celebrity matches for 
// a selected name and gender
(function() {

	// Constructs initial name list and sets up event handlers on the page
	window.onload = function() {
		// Requests a list of all names in text form 
		// to be displayed in the drop down box		
		
		var search = document.getElementById("search");
		search.onclick = function() {
			HttpResponse<String> response = Unirest.get("http://api.imagga.com/v1/tagging?url=http%3A%2F%2Fplayground.imagga.com%2Fstatic%2Fimg%2Fexample_photo.jpg&version=2")
				.header("accept", "application/json")
				.header("authorization", "Basic YWNjXzk4OGQ0NmMxMWIxZWM3MTo2MjFlYzZlYjg5MjVhNjQ4OWZlNjdjNWEzMTE0NGY5Yw==")
				.asString();
				
			var data = JSON.parse(response);
			
			for (var i = 0; i < 5; i++) {
					var li = document.createElement("li");
					li.innerHTML = data.results.tags[i].tag + " = " + 
									data.results.tags[i].confidence + "% confidence";
					document.getElementById("results").appendChild(li);
			}
		} ;
	};	
	
})();	



