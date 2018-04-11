var assert = require("assert");

var works = require("../all");

var titles = Object.keys(works);

for (var i = 0; i < titles.length; ++i) {
    var title = titles[i];
    var test = works[title];
    assert(test.test(title), "[" + title + "] will match [" + test + "]");
    assert(!test.test(""), "[" + title + "] will not match empty");
}
