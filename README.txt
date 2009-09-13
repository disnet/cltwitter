cltwitter is a script that allows you to run filters written in javascript on twitter streams.

USAGE:
You'll need to modify run.sh to use your twitter username/password and which filters you want to run. 

Example:
org.mozilla.javascript.tools.shell.Main main.js USERNAME PASSWORD TIMELINE FILTER1 FILTER2

becomes

org.mozilla.javascript.tools.shell.Main main.js disnet my_password friends expandUrl

Note that TIMELINE can be either "friends" in which case the filters run over the last 20 tweets of the people you follow or it an be a twitter username in which case the filters run over the last 20 tweets of that specific user.
