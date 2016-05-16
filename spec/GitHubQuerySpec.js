describe("Github Query", function(){
  var GitHubQuery = require("../lib/GitHubQuery.js"),
      jsdom = require("jsdom");


  var gitHubQuery;
  var response = {
    name: "something"
  }

  beforeEach(function (){
    gitHubQuery = new GitHubQuery();
    document = jsdom.jsdom('<body></body>');
    window = document.defaultView;
    $ = require('jquery');
  });

  it("Parses login", function (){

  });

  it("Parses name", function (){
    gitHubQuery.onSuccess(response);
    expect(gitHubQuery.parsedData.name).toEqual(response.name);
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
