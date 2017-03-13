'use strict';

module.exports = function(app, cb) {
  app.models.User.create({
    email: 'user@example.com',
    password: 'secret'
  }, function(error, user) {
    if (error) throw error;

    cb();
  });
};
