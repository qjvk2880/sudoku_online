var db = require("../db");

exports.add_record = function (hrs, min, sec, userName) {
  var time =
    (hrs > 9 ? hrs : "0" + hrs) +
    (min > 9 ? min : "0" + min) +
    (sec > 9 ? sec : "0" + sec);
  
  db.query(
    `INSERT INTO time_record(name,time)
  VALUES(?,?)`,
    [userName, time],
    function (error, result) {
      if (error) throw error;
    }
  );
};

exports.get_ranking = function (callback) {
  
  db.query(`SELECT * FROM time_record ORDER BY TIME ASC LIMIT 10`, function (error, ranking) {
    if (error){
      throw error;
    }   
    
      return callback(ranking);
  });
  
};
