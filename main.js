// "Authorization: Bearer DiyC4W99RSkgLZV4xknPVZRu9VJoz1"


"use strict"

(function() {
	window.onload = function() {

		document.getElementById("shufflebutton").onclick = shuffle;
	}

	fuction getLeg() {
		curl -H "Authorization: Bearer DiyC4W99RSkgLZV4xknPVZRu9VJoz1" https://api.clarifai.com/v1/tag/?url=http://www.quizified.com/uploads/hot2.jpg
	}

	function getHotdog() {
		curl -H "Authorization: Bearer DiyC4W99RSkgLZV4xknPVZRu9VJoz1" https://api.clarifai.com/v1/tag/?url=http://intelligenttravel.nationalgeographic.com/files/2012/06/dumpling-taipei-590x442.jpg
	}

}
)();
