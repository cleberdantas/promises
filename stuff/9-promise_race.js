/*
  Promise.race()
*/

var req1 = new Promise(function(resolve, reject) { 
	//reject(Error('tchan!'));
	setTimeout(function() { resolve('First!'); }, 8000);
});

//Chega antes
var req2 = new Promise(function(resolve, reject) { 
	setTimeout(function() { resolve('Second!'); }, 3000);
});

Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one) {
	console.log('Catch: ', one);
});
