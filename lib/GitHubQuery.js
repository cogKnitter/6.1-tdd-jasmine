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


  };

  gitHubQuery.getData = function (){

    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/cogknitter",
      dataType: "json",
      success: success.onSuccess

    })
  }
}

module.exports = GitHubQuery;
