$ = require("jquery"),
    GitHubQuery = require("../lib/GitHubQuery.js")

$(function (){


var gitHubQuery = new GitHubQuery();

  gitHubQuery.getData();
  gitHubQuery.onSuccess();

});
