const { connection } = require("../../db-connection");

class Calendar {
  static findAll() {
    const sql = "SELECT * FROM calendar";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM calendar WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(calendar) {
    const sql = "INSERT INTO calendar SET ?";
    return connection.promise().query(sql, [calendar]);
  }

  static updateOne(calendar, id) {
    const sql = "UPDATE calendar SET ? WHERE id=?";
    return connection.promise().query(sql, [calendar, id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM calendar WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Calendar;
