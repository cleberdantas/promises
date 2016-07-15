/*
  Promise.resolve()
  Promise.reject()
*/

var userCache = {};

function getUserPosts(userId) {
  // // In both cases, cached or not, a promise will be returned
  if (userCache[userId]) {
  	// Return a promise without the "new" keyword
    return Promise.resolve(userCache[userId]);
  }

  // Use the fetch API to get the information
  // fetch returns a promise
  return fetch('http://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(function(result) {
      if(result.status == 200){
        userCache[userId] = true;
        return true;
      }
    })
    .catch(function() {
      throw new Error('Could not find user: ' + userId);
    });
}

getUserPosts(2).then(function(response){
    console.log(response);
})