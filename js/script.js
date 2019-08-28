function load_page(name) {
	fetch('pages/' + name + '.html')
		.then(function(response) {
    		return response.text();
  		}).then(function (data) {
  			document.getElementById('content-text').innerHTML = data;
  	});

  	document.querySelector('#content-image img').src = 'img/' + name + '.jpg';
}
