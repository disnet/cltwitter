importPackage(Packages.twitter4j);

load("lib/functional.js");
load("src/core.js");
load("src/tcl.js");
load("src/filters.js");

if(arguments.length < 4) {
  print("Missing required arguments! Must include <username> <password> <timeline type> <filter 1> ... <filter n>");
}
else {
  var username = arguments[0];
  var password = arguments[1];
  var timeline = arguments[2];
  var filters = arguments.slice(3);

  var tcl = new TCL(username, password);

  var filteredTimeline = tcl.run(timeline, filters);

  for(var i = 0; i < filteredTimeline.length; i++) {
    print(">>> " + filteredTimeline[i]);
  }

}
