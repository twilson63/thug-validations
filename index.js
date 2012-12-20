// Common Validations abstracted from: https://github.com/sintaxi/node-rolodex/blob/master/lib/validations.js
var validator = require('validator');

exports.present = function(field, obj, errors, next) {
  if (obj[field] && obj[field].length > 0) {
    next();
  } else {
    errors.push("must be present");
    next();
  }
}

exports.confirmation = function(field, obj, errors, next) {
  if (obj.hasOwnProperty(field)) {
    if (obj.hasOwnProperty(field + "_confirmation")) {
      if (obj[field] === obj[field + "_confirmation"]) {
        next();
      } else {
        errors.push("confirmation must match")
        next();
      }
    } else {
      errors.push("confirmation must be present")
      next();
    }
  } else {
    next();
  }
}

exports.email = function(field, obj, errors, next) {
  try {
    validator.check(obj[field]).isEmail();
  } catch (e) {
    errors.push("must be valid");
  }
  next();
}
