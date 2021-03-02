/* https://github.com/kotleni/youtube-liker */

const threads = 5; // количество "потоков"
const delayA = 50; // задержка нажатием на лайк
const delayB = 150; // задержка перед нажатием на дизлайк

// запускаем "потоки"
for(var i = 0; i < threads; i++) {
	// получаем элементы
	var a = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-toggle-button-renderer")[0];
	var b = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-toggle-button-renderer")[1];
	
	// запускаем фоновый "процесс"
	setInterval(function(){
		a.click(); // клик на лайк
		setTimeout(function() {
			b.click(); // клик на дизлайк
		}, delayB);
	}, delayA);
}