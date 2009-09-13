TestCase("filtersTest", {
  should_expand_shortened_url : function() {
    assertEquals("http://en.m.wikipedia.org/wiki/Philosophical_zombie",
		 commandFilters.expandUrl("http://bit.ly/17PJLe"));
  },

  should_not_have_problems_with_no_urls_to_expand : function() {
    assertEquals("foo bar baz",
		 commandFilters.expandUrl("foo bar baz"));
  },

  filter_should_strip_urls_when_two_exist : function() {
    assertSame(commandFilters.stripUrls("when in http://www.google.com do as http://mozilla.org did"),
	       "http://www.google.com\nhttp://mozilla.org");
  },

  filter_should_strip_urls_when_one_exists : function() {
    assertSame(commandFilters.stripUrls("when in rome do as http://mozilla.org did"),
	       "http://mozilla.org");
  },
  filter_should_return_empty_string_when_no_url_exists : function() {
    assertSame(commandFilters.stripUrls("\when in rome do as the romans did"),
	       "");
  }
});
