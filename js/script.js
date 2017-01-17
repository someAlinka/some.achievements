;(function(){
	var d = document,
		linkAdd = d.getElementById("add_new");

	if(d.getElementsByClassName("achiev").length > 100){ // если больше 100 ачивок ссылку добавления не показывать
		linkAdd.remove();
	}

	
	linkAdd.addEventListener("click", function(e) {
		var thisAchiev = this,
			tempAchiev = d.getElementsByClassName("template_achiev")[0],
			newAchiev = d.getElementsByClassName("template_achiev")[0].cloneNode(true),
			achievCount = d.getElementsByClassName("achiev").length,
			listAchiev = d.getElementsByClassName("achiev_list")[0],
			randAchiev = Math.floor(Math.random() * (5 - 1) + 1);

		tempAchiev.className += " js_visible"; // показать прелоадер
		thisAchiev.parentNode.className += " js_disabled"; // скрыть ссылку добавдения ачивки

		setTimeout(function() {
			newAchiev.className = "achiev new_achiev";

			thisAchiev.parentNode.className = thisAchiev.parentNode.className.replace(" js_disabled",""); //показываем ссылку
			tempAchiev.className = tempAchiev.className.replace(" js_visible",""); // прячем прелоадер
			// данные для новой ачивки
			newAchiev.getElementsByClassName("achiev_count")[0].innerText = achievCount;
			newAchiev.getElementsByClassName("achiev_descr")[0].innerText = "Your achievement number " + achievCount;
			newAchiev.getElementsByClassName("achiev_img")[0].style.backgroundImage = "url(img/temp/" + randAchiev+".jpg)";
			// показываем новую ачивку
			listAchiev.insertBefore(newAchiev, listAchiev.firstChild.nextSibling.nextSibling);
			if(achievCount == 100){ // если 100 ачивок набралось прячем ссылку добавления
				linkAdd.remove();
			}
		}, randAchiev * 1000); // рандомное число ожидания, просто так

		e.preventDefault();
	});
}());