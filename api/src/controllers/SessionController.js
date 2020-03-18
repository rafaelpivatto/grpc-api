const UserService = require("../services/user");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    UserService.loginUser({ user: { email, password } }, (err, response) => {
      if (err) console.log(err);
      else console.log(response);
    });

    // const response = await promisify(UserService.loginUser)({
    //   email,
    //   password
    // });

    return res.json("test");
  }
}

module.exports = new SessionController();
