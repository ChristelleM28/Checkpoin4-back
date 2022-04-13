const { connection } = require("../../db-connection");

class Rules {

  static findAll() {
    const sql = "SELECT * FROM rules";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM rules WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(rule) {
    const sql = "INSERT INTO rules SET ?";
    return connection.promise().query(sql, [rule]);
  }

  // pour le put: modification de l'utilisateur
  static updateOne(rule, id) {
    const sql = "UPDATE rules SET ? WHERE id=?";
    return connection.promise().query(sql, [rule, id]);
  }

  // pour le delete: suppression de l'utilisateur
  static deleteOneById(id) {
    const sql = "DELETE FROM rules WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Rules;
