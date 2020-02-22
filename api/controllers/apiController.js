"use strict";

const testModel = require("../models/testModel")

exports.getModels = function(req, res) {
    res.json(testModel.Models)
}