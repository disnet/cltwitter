/**
 * cltwitter
 *
 * Runs javascript filters on twitter streams
 *
 * Copyright (c) 2009 Tim Disney
 * Licensed under the MIT license
 */
load("src/tcl.js");
load("lib/functional.js");
load("lib/mootools.js");
importPackage(Packages.twitter4j);

TestCase("IntegrationTests", {
  should_get_timeline_for_all : function() {
    var tcl = new TCL();
    var timeline = tcl.getTimeline("friends");

    assertTrue(timeline.length != 0);
  },
  should_get_timeline_for_user : function() {
    var tcl = new TCL();
    var timeline = tcl.getTimeline("disnet");

    assertTrue(timeline.length != 0);
  }

});
