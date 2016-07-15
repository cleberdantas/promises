/*
  Promise.all()
*/

var request1 = fetch('http://jsonplaceholder.typicode.com/posts?userId=1');
var request2 = fetch('http://jsonplaceholder.typicode.com/posts?userId=2');

Promise.all([request1, request2])
.then(function(results) {
	console.log(results);
})
.catch(function(data){
	console.error(data);
});