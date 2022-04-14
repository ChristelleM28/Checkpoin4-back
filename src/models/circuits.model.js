const { connection } = require("../../db-connection");

class Circuits {
  static findAll() {
    const sql = "SELECT * FROM circuits";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM circuits WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(circuit) {
    const sql = "INSERT INTO circuits SET ?";
    return connection.promise().query(sql, [circuit]);
  }

  static updateOne(circuit, id) {
    const sql = "UPDATE circuits SET ? WHERE id=?";
    return connection.promise().query(sql, [circuit, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM circuits WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Circuits;
