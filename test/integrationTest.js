load("src/tcl.js");
load("lib/functional.js");
load("lib/mootools.js");
importPackage(Packages.twitter4j);

if(1==2) { // don't want to be running tests that hit twitter all the time, causes api overruns

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
}
