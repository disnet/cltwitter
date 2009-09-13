importPackage(java.net);

var commandFilters = {
  stripUrls: function(s) {
    var results = "";
    var urls = s.match(/(http:\/\/[^\s]*)/g);
    if(urls !== null) {
      results = urls.join("\n");
    }
    return results;
  },

  expandUrl: function(s) {
    var expand = function(url) {
      HttpURLConnection.setFollowRedirects(false);
      var conn = URL(url).openConnection();
      conn.connect();
      return conn.getHeaderField("Location");
    };

    var urls = s.match(/(http:\/\/[^\s]*)/g);
    if(urls !== null) {
      for(var i = 0; i < urls.length; i++) {
	if(urls[i] !== null) {
	  var expandedURL = expand(urls[i]);
	  if(expandedURL !== null) {
	    s = s.replace(urls[i], expandedURL);
	  }
	}
      }
    }
    return s;
  }
};
