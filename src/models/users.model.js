const { connection } = require("../../db-connection");

class Users {
  // pour le get
  static findAll() {
    const sql = "SELECT * FROM users";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  //pour le post: création nouvel utilisateur
  static createOne(email) {
    const sql = "INSERT INTO users SET ?";
    return connection.promise().query(sql, [email]);
  }

  // pour le put: modification de l'utilisateur
  static updateOne(email, id) {
    const sql = "UPDATE users SET ? WHERE id=?";
    return connection.promise().query(sql, [email, id]);
  }

  // pour le delete: suppression de l'utilisateur
  static deleteOneById(id) {
    const sql = "DELETE FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Users;
