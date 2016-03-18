var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
$.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
  $('showRepos').text('Here is some information on' + userName + '.');
console.log(response);
}).fail(function(error) {
  $('#showRepos').text(error.responseJSON.message);
});
