let theNumber = Number(prompt("Pick a number!"));
if (!Number.isNaN(theNumber)) {
  debug("your number is the square root of " +
    theNumber * theNumber);
} else {
    debug("hey. give me a number?");
}
