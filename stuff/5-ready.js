var ready = new Promise(function(resolve){
	function checkState() {
		if (document.readyState != 'loading') {
			resolve();
		}
	}
	document.addEventListener('readystatechange', checkState);
	checkState();
})


ready.then(function(){
	console.log('Funfo');
})