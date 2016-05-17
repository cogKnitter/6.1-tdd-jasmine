function GitHubQuery(){
  var gitHubQuery = this;

  gitHubQuery.parsedData = {
    name: ""
  }

  gitHubQuery.onSuccess = function (response){
    gitHubQuery.parsedData.name = response.name;
    gitHubQuery.parsedData.location = response.location;
    gitHubQuery.parsedData.public_repos = response.public_repos
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
