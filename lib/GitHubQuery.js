function GitHubQuery(){
  var gitHubQuery = this;



  gitHubQuery.parsedData = {

  }


  gitHubQuery.onSuccess = function (response){
    gitHubQuery.parsedData.name = response.name;
    gitHubQuery.parsedData.location = response.location;
    gitHubQuery.parsedData.public_repos = response.public_repos;
    gitHubQuery.parsedData.avatar_url = response.avatar_url;
    gitHubQuery.parsedData.login = response.login;
    gitHubQuery.parsedData.html_url = response.html_url

    $("[data-js='resultsSection']").append(`
      <h2 class="gh-user" data-js="ghUser-name">${response.name}</h2>
      <h3 class="user__login" data-js="ghUser-login">${response.login}</h3>
      <h3 class="user__location" data-js="ghUser-location">${response.location}</h3>
      <h3 class="user__pub-repos" data-js="ghUser-pubRepos">${response.public_repos}</h3>
      <img class="user__avatar" data-js="ghUser-avatar" src="${response.avatar_url}"/>
      <h3 class="user__url" data-js="ghUser-url">${response.html_url}</h3>
      `)
  };




  gitHubQuery.getData = function (){

    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/cogknitter",
      dataType: "json",
      success: gitHubQuery.onSuccess
    })


  }
}

module.exports = GitHubQuery;
