var getRepos = require('./../js/search.js').getRepos;

$(document).ready(function() {
  $('#userRepoButton').click(function() {
    var userName = $('#userRepo').val();
    $('#userRepo').val("");
    var fullUserInfo = getRepos(userName);
    $('#showRepos').text(userName + fullUserInfo);
  });
});
