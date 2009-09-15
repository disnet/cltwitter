/**
 * cltwitter
 *
 * Runs javascript filters on twitter streams
 *
 * Copyright (c) 2009 Tim Disney
 * Licensed under the MIT license
 */
importPackage(java.net);
importPackage(java.util);
importPackage(Packages.del.icio.us);

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
    },

    postLinksToDelicious : function(s) {
        function post(url, description) {
            var prop = new Properties();
            prop.load(new FileInputStream("config.properties"));
            var username = prop.getProperty("delicious.username");
            var password = prop.getProperty("delicious.password");

            var delicious = new Delicious(username, password);
            delicious.addPost(url, description, "", "fromcltwitter", new Date());
        }

        var urls = s.match(/(http:\/\/[^\s]*)/g);
        if(urls !== null) {
            for(var i = 0; i < urls.length; i++) {
                if(urls[i] !== null) {
                    post(urls[i], s);
                }
            }
        }
        return s;
    }
};
