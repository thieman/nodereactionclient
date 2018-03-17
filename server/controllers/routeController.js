const sql = require("../dbconfig.js");
const sqlstring = require("sqlstring");

module.exports = {
  getRoutes: function(req, res) {
    let date = "2018-03-15 03:36:49";
    let query = sqlstring.format(
      `SELECT route, method, count(transaction_id), avg(duration) FROM transactions
      WHERE start_timestamp > ?
      GROUP BY route, method;`,
      [req.params.offset]
    );

    sql.query(query, (err, results, fields) => {
      err ? res.send(err) : res.send(results);
    });
  },
};