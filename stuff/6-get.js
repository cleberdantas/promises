var get = function(url){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();

		xhr.open('GET', url);

		xhr.onload = function(){
			if(xhr.status == 200){
				resolve(xhr.response);
			}
			else{
				reject(Error(xhr.statusText));
			}
		}

		xhr.onerror = function(){
			reject(Error('Network error'));
		}

		xhr.send();
	})
}

get('http://www.minhavida.com.br')
.then(function(response) {
  console.log("success!", response);
})
.catch(function(error) {
  console.error("failed!", error);
});