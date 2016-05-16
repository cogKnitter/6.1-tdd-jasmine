function GitHubQuery(){
  var gitHubQuery = this;

  gitHubQuery.parsedData = {
    name: ""
  }
  gitHubQuery.getData = function (){
    gitHubQuery.parsedData.name = "Mariah"
  }
}

module.exports = GitHubQuery;
