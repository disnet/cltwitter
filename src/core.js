/* Properly install functional javascript to the global address space */
for(property in Functional) {
  this[property] = Functional[property];
}
