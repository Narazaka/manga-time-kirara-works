var main = require("./index");
var magica = require("./magica");
var near = require("./near");
var time = require("./time");

var all = {};

function merge(works) {
    var names = Object.keys(works);
    for (var i = 0; i < names.length; ++i) {
        var name = names[i];
        all[name] = works[name];
    }
}

merge(main);
merge(magica);
merge(near);
merge(time);

module.exports = all;
