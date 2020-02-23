"use strict";

const testModel = require("../models/testModel");

exports.getModels = function(req, res) {
    res.json(testModel.Models);
}

exports.getCombinations = function(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest) {
            return;
        }
        if (!rest) {
            a.push(active);
        }
        else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}