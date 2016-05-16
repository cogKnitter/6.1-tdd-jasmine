describe("Github Query", function(){
  var GitHubQuery = require("../lib/GitHubQuery.js");
  var gitHubQuery;

  beforeEach(function (){
    gitHubQuery = new GitHubQuery();
  });

  it("Parses login", function (){

  });

  it("Parses name", function (){
    gitHubQuery.getData();
    expect(gitHubQuery.parsedData.name).toEqual("Mariah");
  });
  it("Parses location", function (){

  });
  it("Parses number of repos", function (){

  });
  it("Parses avatar url", function (){

  });
  it("Parses html url", function (){

  });
});
