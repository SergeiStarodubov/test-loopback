/* eslint-disable max-len */
'use strict';

module.exports = function(app) {
  // console.log(Object.keys(app.models));
  var User = app.models.Developer;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  User.create([
    {username: 'Mark', email: 'markTwen@gmail.com', password: '12345', age: '30', skills: ['css']},
  ], function(err, users) {
    if (err) console.error(err);
    Role.create({
      name: 'admin',
    }, function(err, role) {
      if (err) console.error(err);
      console.info(role);
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id,
      }, function(err, principal) {
        if (err) console.error(err);
        console.info(principal);
      });
    });
  });
};
