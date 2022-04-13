const { connection } = require("../../db-connection");

class Infos {

  static findAll() {
    const sql = "SELECT * FROM infos";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM infos WHERE id=?";
    return connection.promise().query(sql, [id]);
  }


  static createOne(info) {
    const sql = "INSERT INTO infos SET ?";
    return connection.promise().query(sql, [info]);
  }

  static updateOne(info, id) {
    const sql = "UPDATE infos SET ? WHERE id=?";
    return connection.promise().query(sql, [info, id]);
  }


  static deleteOneById(id) {
    const sql = "DELETE FROM infos WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Infos;
