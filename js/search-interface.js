// var apiKey = "a79875ed23632e525bcc50f6f4a3eb28f0df2522";
var getRepos = require('./../js/search.js').getRepos;


$(document).ready(function() {
  $('#userRepoButton').click(function() {
    var userName = $('#userRepo').val();
    $('#userRepo').val("");
    var fullUserInfo = getRepos(userName);
    $('#showRepos').text(userName + fullUserInfo);
  });
});
