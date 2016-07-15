/*
resolvido
rejeitado
pendente
determinado
*/

var success = true;

var p = new Promise(function(resolve, reject){
	if(success)
		resolve(true);
	else
		reject(Error('Ups'));
})

p.then(function(data){
	console.log(data);
})
.catch(function(data){
	console.error(data);
})