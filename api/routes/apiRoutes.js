"use strict";

module.exports = function(app) {
  var api = require("../controllers/apiController");

  app.route("/model/test")
    .get(api.getTestModel);

  app.route("/models")
    .get(api.getModels);

  app.route("/model/:id")  
    .get(api.getModel);

  
  app.route("/combinations/test")
    .get(api.getTestCombinations);
};