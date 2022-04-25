const Person = require("../models/Person");

class UserController {
  async createUser(req, res) {
    try {
      const { name, surname } = req.body;

      await Person.create({
        name,
        surname
      });

      return res.status(200).json({ ok: true });
    } catch (err) {
      console.log(err);
    }
  }

  async getUser(req, res) {
    try {
      const users = await Person.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { updates } = req.body;
      const user = await Person.findOne({ where: { id } });

      if (user) {
        await user.update({ ...updates });
        await user.save();

        return res.status(200).json({ ok: true, message: "Пользователь изменен" });
      } else {
        return res.status(404).json({ ok: true, message: "Пользователь не найден" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await Person.findOne({ where: { id } });

      if (user) {
        await user.destroy();

        return res.status(200).json({ ok: true, message: "Пользователь удален" });
      } else {
        return res.status(404).json({ ok: true, message: "Пользователь не найден" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getOneUser(req, res) {
    try {
      const { id } = req.params;
      const user = await Person.findOne({ where: { id } });

      console.log(id);

      return user ? res.status(200).json({ ok: true, user }) : res.status(404).json({ ok: true, message: "Пользователь не найден" });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UserController();