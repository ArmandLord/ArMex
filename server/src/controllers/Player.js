const { Player } = require("../db");


// async function getUsers(req, res) {
//   try {
//     const users = await User.findAll();
//     const userData = users.map((u) => {
//       return {
//         id_user: u.id_user,
//         nickname: u.nickname_user,
//         name: u.name_user,
//         lastname: u.lastname_user,
//         address: u.address_user,
//         email: u.email_user,
//         active: u.is_active,
//         created: u.createdAt,
//         admin: u.is_admin
//       };
//     });
//     res.status(200).send(userData);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// }

module.exports = {
  getUsers
};