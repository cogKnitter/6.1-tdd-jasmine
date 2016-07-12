describe("Github Query", function(){
  var GitHubQuery = require("../lib/GitHubQuery.js"),
      jsdom = require("jsdom");


  var gitHubQuery;
  var response = {
    name: "something",
    location: "a place",
    public_repos: "10",
    avatar_url: "https://somewhere.com",
    login: "username",
    html_url: "https://somewhere.com"
  }

  beforeEach(function (){
    gitHubQuery = new GitHubQuery();
    document = jsdom.jsdom('<body></body>');
    window = document.defaultView;
    $ = require('jquery');
  });

  it("Parses login", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.login).toEqual(response.login);
  });
  it("Parses name", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.name).toEqual(response.name);
  });
  it("Parses location", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.location).toEqual(response.location);
  });
  it("Parses number of repos", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.public_repos).toEqual(response.public_repos);
  });
  it("Parses avatar url", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.avatar_url).toEqual(response.avatar_url);
  });
  it("Parses html url", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.html_url).toEqual(response.html_url);
  });
});
