function TCL(username, password) {
  this.twitter = new Twitter(username, password);
  this.filters = commandFilters;
}

TCL.prototype.getTimeline = function(type) {
  var that = this;
  var timeline = function(type) {
    if(type === "friends") {
      return that.twitter.getFriendsTimeline();
    }
    else {
      return that.twitter.getUserTimeline(type);
    }
  };
  var rawTimeline = timeline(type);
  var result = [];
  for(var i = 0; i < rawTimeline.size(); i++) {
    result.push(rawTimeline.get(i).getText());
  }
  return result;
};

TCL.prototype.run = function(type, filterNames) {
  var timeline = this.getTimeline(type);
  for(var i = 0; i < timeline.length; i++) {
    for(var j = 0; j < filterNames.length; j++) {
      timeline[i] = this.filters[filterNames[j]](timeline[i]);
    }
  }
  return timeline;
};
