var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){

    $('#showImage').prepend('<img src="' + response[0].owner.avatar_url + '">');

    $('#showRepos').text('Here are a portion of the repositories created by  ' + userName + ':');
    for (var i = 0; i < response.length; i++)
    $("#showRepos").append('<li><a href="' + response[i].html_url + '"><h4>' + response[i].name + '</h4></a><h6> ' + response[i].description + '</h6></li>')

  }).fail(function(error) {
    $('#showRepos').text(error.responseJSON.message);
  });

};
