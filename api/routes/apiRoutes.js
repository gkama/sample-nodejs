"use strict";

module.exports = function(app) {
  var api = require("../controllers/apiController");

  app.route('/models')
    .get(api.getModels)
};