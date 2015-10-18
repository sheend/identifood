"use strict";

(function() {

	window.onload = function() {
		// Requests a list of all names in text form 
		// to be displayed in the drop down box		
		
		var test = document.getElementById("search");
		test.onClick = function() {
			var li=document.createElement("li");
			li.innerHTML="HELLO";
			document.getElementById("results").appendChild(li);
		};
		document.getElementById("results").style.display = "";
		
		// var search = document.getElementById("search");
		document.getElementById("search").onclick = function() {
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
		};
	};	
	
})();	



