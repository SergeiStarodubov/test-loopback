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
    // eslint-disable-next-line no-undef
    if (err) console.error(err);
    // ...
    // Create projects, assign project owners and project team members
    // ...
    // Create the admin role
    Role.create({
      name: 'admin',
    }, function(err, role) {
      // eslint-disable-next-line no-undef
      if (err) console.error(err);
      // eslint-disable-next-line no-undef
      console.info(role);
      // Make Bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id,
      }, function(err, principal) {
        // eslint-disable-next-line no-undef
        if (err) console.error(err);
        // eslint-disable-next-line no-undef
        console.info(principal);
      });
    });
  });
};
