function assertTrue(cond, msg) {
  if(cond !== true) {
    if(msg !== undefined) {
      throw msg;
    }
    else {
      throw "assertion failed";
    }
  }
}

function assertEquals(a, b, msg) {
  if(a != b) {
    throw "[" + a + "] is not equal to [" + b + "] -- " + msg;
  }
}
function assertSame(a, b, msg) {
  if(a !== b) {
    throw "[" + a + "] is not the same as [" + b + "] -- " + msg;
  }
}

function fail(msg) {
  throw "Failed test [" + msg + "]";
}

function TestCase(testName, to) {
  print("---- Begin: " + testName + " ----");
  for (name in to) {
    if(typeof to[name] === 'function') {
      try {
	if(to.setUp !== undefined) {
	  to.setUp();
	}

	if(name !== 'setUp') {
	  to[name]();
	  print("passed (" + name + ")");
	}
      }
      catch (e) {
	print("FAILED (" + name + "): " + e);
      }
    }
  }
  print("");
}
