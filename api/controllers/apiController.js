"use strict";

const models = require("../models/testModel")

exports.getModels = function(req, res) {
    res.json({ test: "yes" })
}