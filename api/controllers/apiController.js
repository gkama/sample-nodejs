"use strict";

const testModel = require("../models/testModel");

exports.getTestModel = function(req, res) {
    res.json(testModel.TestModel)
}

exports.getModels = function(req, res) {
    res.json(testModel.Models);
}

exports.getModel = function(req, res) {
    for(const model of testModel.Models) {
        if (model.id == req.params.id) {
            res.json(model);
        }
    }
}

exports.getCombinations = function(str, res) {
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