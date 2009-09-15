/**
 * cltwitter
 *
 * Runs javascript filters on twitter streams
 *
 * Copyright (c) 2009 Tim Disney
 * Licensed under the MIT license
 */
importPackage(Packages.twitter4j);
importPackage(java.util);
importPackage(java.io);

load("lib/functional.js");
load("src/core.js");
load("src/tcl.js");
load("src/filters.js");

function main() {
    var prop = new Properties();
    prop.load(new FileInputStream("config.properties"));

    var username = prop.get("twitter.username");
    var password = prop.get("twitter.password");
    var timeline = prop.get("timeline");
    var filters = prop.get("filters").split(" ");

    var tcl = new TCL(username, password);

    var filteredTimeline = tcl.run(timeline, filters);

    for(var i = 0; i < filteredTimeline.length; i++) {
        print(">>> " + filteredTimeline[i]);
    }
}

main();
